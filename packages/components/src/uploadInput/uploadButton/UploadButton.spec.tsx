import { render, screen, userEvent } from '../../test-utils';

import UploadButton, { UploadButtonProps, TEST_IDS } from './UploadButton';
import { imageFileTypes } from './defaults';

describe('UploadButton', () => {
  const pngFile = new File(['foo'], 'foo.png', { type: 'image/png' });
  const jpgFile = new File(['foo'], 'foo.jpg', { type: 'image/jpg' });

  const props: UploadButtonProps = {
    onChange: jest.fn(),
  };

  const renderComponent = (customProps = props) => render(<UploadButton {...customProps} />);

  describe('single file upload', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('should render the file input form', () => {
      expect(screen.getByText('Upload file')).toBeInTheDocument();
    });

    it('should set accept to imageTypes', () => {
      expect(screen.getByTestId(TEST_IDS.uploadInput)).toHaveAttribute(
        'accept',
        imageFileTypes.join(','),
      );
    });

    it('trigger onChange callback with a FileList', () => {
      const input = screen.getByTestId(TEST_IDS.uploadInput);
      userEvent.upload(input, [pngFile, jpgFile]);

      expect(props.onChange).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect((props.onChange as jest.Mock).mock.calls[0][0]).toHaveLength(1);
    });
  });

  describe('multiple file upload', () => {
    beforeEach(() => {
      (props.onChange as jest.Mock).mockClear();
      renderComponent({ ...props, multiple: true });
    });

    it('should disable the file input', () => {
      expect(screen.getByTestId(TEST_IDS.uploadInput)).toHaveAttribute('multiple');
    });

    it('trigger onChange callback with a FileList', () => {
      const input = screen.getByTestId(TEST_IDS.uploadInput);
      userEvent.upload(input, [pngFile, jpgFile]);

      expect(props.onChange).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect((props.onChange as jest.Mock).mock.calls[0][0]).toHaveLength(2);
    });
  });

  describe('disabled state', () => {
    beforeEach(() => {
      renderComponent({ ...props, disabled: true });
    });

    it('should disable the file input', () => {
      expect(screen.getByTestId(TEST_IDS.uploadInput)).toBeDisabled();
    });
  });

  describe('accept all file types', () => {
    beforeEach(() => {
      renderComponent({ ...props, fileTypes: ['*'] });
    });

    it('should not add accept attribute to file input', () => {
      expect(screen.getByTestId(TEST_IDS.uploadInput)).not.toHaveAttribute('accept');
    });
  });
});
