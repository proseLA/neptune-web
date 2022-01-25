import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Status } from '../common';
import { render, screen, waitFor, waitForElementToBeRemoved } from '../test-utils';

import UploadInput, { UploadInputProps } from './UploadInput';
import { TEST_IDS as UPLOAD_BUTTON_TEST_IDS } from './uploadButton/UploadButton';
import { TEST_IDS as UPLOAD_ITEM_TEST_IDS } from './uploadItem/UploadItem';

const spiedDateObject = jest.spyOn(global, 'Date');

describe('UploadInput', () => {
  const pngFile = new File(['foo'], 'foo.png', { type: 'image/png' });
  const jpgFile = new File(['foo'], 'foo.jpg', { type: 'image/jpeg' });

  const files = [
    {
      id: 1,
      filename: 'purchase-receipt.pdf',
      status: Status.SUCCEEDED,
    },
    {
      id: 2,
      filename: 'CoWork-0317-invoice.pdf',
      status: Status.PROCESSING,
    },
  ];

  const props: UploadInputProps = {
    onUploadFile: jest
      .fn()
      .mockResolvedValue({ id: 1 })
      .mockResolvedValueOnce({ id: 2 })
      .mockResolvedValueOnce({ id: 3 }),
    onDeleteFile: jest.fn().mockResolvedValue({}),
  };

  const renderComponent = (customProps: UploadInputProps = props) =>
    render(<UploadInput {...customProps} />);

  beforeEach(() => {
    (spiedDateObject as jest.Mock).mockImplementation(() => ({
      getTime: jest.fn().mockReturnValue(Math.random()),
    }));
  });

  afterAll(() => {
    (spiedDateObject as jest.Mock).mockRestore();
  });

  describe('single file upload', () => {
    it('should trigger onUploadFiles & onFilesChange with a single FormData entry containing `file` field', async () => {
      const mockTimeStampValue1 = '11111111';
      const mockTimeStampValue2 = '22222222';
      (spiedDateObject as jest.Mock).mockImplementation(() => ({
        getTime: jest
          .fn()
          .mockReturnValueOnce(mockTimeStampValue1)
          .mockReturnValueOnce(mockTimeStampValue2),
      }));

      const onFilesChange = jest.fn();
      renderComponent({ ...props, onFilesChange });

      const input = screen.getByTestId(UPLOAD_BUTTON_TEST_IDS.uploadInput);
      userEvent.upload(input, [pngFile, jpgFile]);

      await waitFor(() => {
        expect(props.onUploadFile).toHaveBeenCalledTimes(1);
      });

      expect(onFilesChange).toHaveBeenCalledTimes(2);
      expect(onFilesChange).toHaveBeenNthCalledWith(1, [
        {
          filename: 'foo.png',
          id: `foo.png_3_${mockTimeStampValue1}`,
          status: 'pending',
          url: undefined,
        },
      ]);

      expect(onFilesChange).toHaveBeenNthCalledWith(2, [
        {
          filename: 'foo.png',
          id: 2,
          status: 'succeeded',
          url: undefined,
        },
      ]);
    });

    it('should render only one file even if multiple ones were supplied', () => {
      renderComponent({ ...props, files });

      expect(screen.getByText(files[0].filename)).toBeInTheDocument();
      files.slice(1, files.length).forEach((file) => {
        expect(screen.queryByText(file.filename)).not.toBeInTheDocument();
      });
    });
  });

  describe('multiple file upload', () => {
    it('should render all files', () => {
      renderComponent({ ...props, files, multiple: true });

      files.forEach((file) => {
        expect(screen.getByText(file.filename)).toBeInTheDocument();
      });
    });

    it('should render the UploadButton also', () => {
      renderComponent({ ...props, files, multiple: true });

      expect(screen.getByText('Upload files')).toBeInTheDocument();
    });

    it('should trigger onUploadFile with multiple FormData entries containing `file` fields', async () => {
      renderComponent({ ...props, multiple: true });

      (props.onUploadFile as jest.Mock).mockClear();

      expect(screen.getByTestId(UPLOAD_BUTTON_TEST_IDS.uploadInput)).toHaveAttribute('multiple');

      const input = screen.getByTestId(UPLOAD_BUTTON_TEST_IDS.uploadInput);
      userEvent.upload(input, [pngFile, jpgFile]);

      await waitFor(() => {
        expect(props.onUploadFile).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('file deletion', () => {
    const onFilesChange = jest.fn();

    beforeEach(() => {
      onFilesChange.mockClear();
    });

    it('should delete file with modal confirmation', async () => {
      renderComponent({
        ...props,
        files,
        multiple: true,
        onFilesChange,
      });

      const fileToDelete = screen.getAllByTestId(UPLOAD_ITEM_TEST_IDS.uploadItem)[0];
      within(fileToDelete).getByLabelText('Remove file', { exact: false }).click();
      screen.getByText('Remove').click();

      await waitForElementToBeRemoved(fileToDelete);
      expect(props.onDeleteFile).toHaveBeenCalledWith(files[0].id);

      expect(onFilesChange).toHaveBeenCalledTimes(2);
      expect(onFilesChange).toHaveBeenNthCalledWith(1, [
        {
          error: undefined,
          filename: 'purchase-receipt.pdf',
          id: 1,
          status: 'processing',
        },
        {
          filename: 'CoWork-0317-invoice.pdf',
          id: 2,
          status: 'processing',
        },
      ]);

      expect(onFilesChange).toHaveBeenLastCalledWith([
        {
          filename: 'CoWork-0317-invoice.pdf',
          id: 2,
          status: 'processing',
        },
      ]);
    });

    it('should delete file with failed state without modal confirmation', () => {
      const files = [
        {
          id: 1,
          filename: 'purchase-receipt.pdf',
          status: Status.FAILED,
        },
      ];

      renderComponent({
        ...props,
        files,
        multiple: true,
        onFilesChange,
      });

      const fileToDelete = screen.getAllByTestId(UPLOAD_ITEM_TEST_IDS.uploadItem)[0];
      within(fileToDelete).getByLabelText('Remove file', { exact: false }).click();

      expect(fileToDelete).not.toBeInTheDocument();

      expect(onFilesChange).toHaveBeenCalledTimes(1);
      expect(onFilesChange).toHaveBeenCalledWith([]);
    });

    it('should not render delete button when no delete callback is provided', () => {
      renderComponent({
        ...props,
        files,
        multiple: true,
        onDeleteFile: undefined,
      });

      expect(screen.queryByLabelText('Remove file ', { exact: false })).not.toBeInTheDocument();
    });
  });

  describe('Max File Upload limit', () => {
    it('should show max file number in the description next to the upload button', async () => {
      renderComponent({
        ...props,
        multiple: true,
        maxFiles: 2,
      });

      await waitFor(() => {
        expect(screen.getByText(/Maximum 2 files\./)).toBeInTheDocument();
      });
    });

    it('should show given error when maxFiles limit is applied and more files are uploaded', async () => {
      const maxFilesReachedMessage = 'Maximum files message from prop';
      const mockOnUploadFileFn = jest.fn();
      renderComponent({
        ...props,
        multiple: true,
        maxFiles: 3,
        maxFilesErrorMessage: maxFilesReachedMessage,
        onUploadFile: mockOnUploadFileFn,
      });

      mockOnUploadFileFn.mockImplementation((formData: FormData) => {
        const file = formData.get('file');
        return Promise.resolve({ file, id: Math.random() });
      });

      const input = screen.getByTestId(UPLOAD_BUTTON_TEST_IDS.uploadInput);
      userEvent.upload(input, [pngFile, jpgFile]);

      const pngFile2 = new File(['foo2'], 'foo2.png', { type: 'image/png' });
      const jpgFile2 = new File(['foo2'], 'foo2.jpg', { type: 'image/jpeg' });
      userEvent.upload(input, [pngFile2, jpgFile2]);

      await waitFor(() => {
        expect(screen.getByText(maxFilesReachedMessage)).toBeInTheDocument();
      });
    });

    it('should show default error when maxFiles limit exceeds and no error message provided', async () => {
      const defaultMaxFilesReachedMessage =
        'Sorry, this upload failed because we can only accept 2 files at once.';
      const mockOnUploadFileFn = jest.fn();
      renderComponent({
        ...props,
        multiple: true,
        maxFiles: 2,
        onUploadFile: mockOnUploadFileFn,
      });

      mockOnUploadFileFn.mockImplementation((formData: FormData) => {
        const file = formData.get('file');
        return Promise.resolve({ file, id: Math.random() });
      });

      const input = screen.getByTestId(UPLOAD_BUTTON_TEST_IDS.uploadInput);
      const pngFile2 = new File(['foo2'], 'foo2.png', { type: 'image/png' });

      userEvent.upload(input, [pngFile, jpgFile, pngFile2]);

      await waitFor(() => {
        expect(screen.getByText(defaultMaxFilesReachedMessage)).toBeInTheDocument();
      });
    });
  });
});
