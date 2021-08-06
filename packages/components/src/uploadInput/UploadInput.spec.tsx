import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/dom';
import { render, screen, waitFor, waitForElementToBeRemoved, act } from '../test-utils';

import UploadInput, { UploadInputProps } from './UploadInput';

import { TEST_IDS as UPLOAD_BUTTON_TEST_IDS } from './uploadButton/UploadButton';
import { TEST_IDS as UPLOAD_ITEM_TEST_IDS } from './uploadItem/UploadItem';
import { Status } from '../common';

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

  describe('single file upload', () => {
    it('should trigger onUploadFiles with a single FormData entry containing `file` field', async () => {
      renderComponent();

      const input = screen.getByTestId(UPLOAD_BUTTON_TEST_IDS.uploadInput);
      userEvent.upload(input, [pngFile, jpgFile]);

      await waitFor(() => {
        expect(props.onUploadFile).toHaveBeenCalledTimes(1);
      });
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
        expect(screen.queryByText(file.filename)).toBeInTheDocument();
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

      expect(props.onUploadFile).toHaveBeenCalledTimes(2);
      expect((props.onUploadFile as jest.Mock).mock.calls[0][0].has('file')).toBeTruthy();
      expect((props.onUploadFile as jest.Mock).mock.calls[1][0].has('file')).toBeTruthy();

      await act(() => Promise.resolve());
    });
  });

  describe('file deletion', () => {
    it('should delete file with modal confirmation', async () => {
      renderComponent({
        ...props,
        files,
        multiple: true,
      });

      const fileToDelete = screen.getAllByTestId(UPLOAD_ITEM_TEST_IDS.uploadItem)[0];
      within(fileToDelete).getByLabelText('Remove file', { exact: false }).click();
      screen.getByText('Remove').click();

      await waitForElementToBeRemoved(fileToDelete);
      expect(props.onDeleteFile).toHaveBeenCalledWith(files[0].id);
    });

    it('should delete file with failed state without modal confirmation', async () => {
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
      });

      const fileToDelete = screen.getAllByTestId(UPLOAD_ITEM_TEST_IDS.uploadItem)[0];
      within(fileToDelete).getByLabelText('Remove file', { exact: false }).click();

      expect(fileToDelete).not.toBeInTheDocument();
    });

    it('should not render delete button when no delete callback is provided', () => {
      renderComponent({
        ...props,
        files,
        multiple: true,
        onDeleteFile: undefined,
      });

      expect(screen.queryAllByLabelText('Remove file ', { exact: false })).toHaveLength(0);
    });
  });
});
