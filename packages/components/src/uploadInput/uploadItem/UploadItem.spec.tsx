import { render, screen } from '../../test-utils';

import UploadItem, { UploadItemProps, TEST_IDS } from './UploadItem';
import { Status } from '../../common';

describe('UploadItem', () => {
  const props: UploadItemProps = {
    file: {
      id: 1,
      filename: 'purchase-receipt.pdf',
      status: Status.SUCCEEDED,
    },
    canDelete: true,
    onDelete: jest.fn(),
  };

  const renderComponent = (customProps = props) => render(<UploadItem {...customProps} />);

  describe('filename', () => {
    it('should display the filename', () => {
      renderComponent();
      expect(screen.getByText(props.file.filename!)).toBeInTheDocument();
    });

    it('should display the default filename when it is missing', () => {
      renderComponent({
        ...props,
        file: { ...props.file, filename: undefined },
      });
      expect(screen.getByText('Uploaded file')).toBeInTheDocument();
    });
  });

  describe('description', () => {
    it('should display the default uploading copy while file upload is in progress', () => {
      renderComponent({
        ...props,
        file: { ...props.file, status: Status.PENDING },
      });
      expect(screen.getByText('Uploading...')).toBeInTheDocument();
    });

    it('should display the default deleting copy while file deletion is in progress', () => {
      renderComponent({
        ...props,
        file: { ...props.file, status: Status.PROCESSING },
      });
      expect(screen.getByText('Deleting...')).toBeInTheDocument();
    });

    it('should display the default success copy when file upload is complete', () => {
      renderComponent({
        ...props,
        file: { ...props.file, status: Status.SUCCEEDED },
      });
      expect(screen.getByText('Uploaded')).toBeInTheDocument();
    });
  });

  describe('failed uploads', () => {
    it('should display the error.message from an API response', () => {
      const errorMessage = 'An API error object with message field';
      renderComponent({
        ...props,
        file: { ...props.file, status: Status.FAILED, error: { message: errorMessage } },
      });
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it('should display the error if it is supplied as a string', () => {
      const errorMessage = 'An API error string';
      renderComponent({
        ...props,
        file: { ...props.file, status: Status.FAILED, error: errorMessage },
      });
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it('should display default error message when error is missing but status is FAILED', () => {
      renderComponent({
        ...props,
        file: { ...props.file, status: Status.FAILED },
      });
      expect(screen.getByText('Uploading failed')).toBeInTheDocument();
    });

    it('should display the error even if status is missing', () => {
      const errorMessage = 'An API error string without status';
      renderComponent({
        ...props,
        file: { ...props.file, error: errorMessage },
      });
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  describe('file deletion', () => {
    it('should render the remove file button when deleteFile prop is supplied', () => {
      renderComponent();
      expect(screen.getByLabelText('Remove file ', { exact: false })).toBeInTheDocument();
    });

    it('should not render the remove file button when canDelete prop is false', () => {
      renderComponent({ ...props, canDelete: false });
      expect(screen.queryByLabelText('Remove file ', { exact: false })).not.toBeInTheDocument();
    });
  });
});
