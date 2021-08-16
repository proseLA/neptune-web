import { render, fireEvent, screen } from '../../../test-utils';

import MediaUploadStep from '.';

describe('mediaUploadStep', () => {
  const defaultProps = {
    fileDropped: jest.fn(),
    isComplete: false,
    usAccept: '*',
    usButtonText: '',
    usDisabled: false,
    usLabel: '',
    usHelpImage: '',
    usPlaceholder: '',
  };

  const renderMediaUploadStep = (props = {}) =>
    render(<MediaUploadStep {...defaultProps} {...props} />);

  const originalMicroApps = window.microapps;
  const image64 = {
    bytes:
      'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
    mimeType: 'image/jpeg',
  };
  const requestMedia = jest.fn().mockImplementation(() => Promise.resolve(image64));

  beforeAll(() => {
    window.microapps = { requestMedia };
  });

  afterAll(() => {
    window.microapps = originalMicroApps;
  });

  it('renders help image passed as url string', () => {
    renderMediaUploadStep({
      usHelpImage: 'usHelpImage',
      usLabel: 'usLabel',
    });
    expect(screen.getByAltText('usLabel')).toBeInTheDocument();
  });

  it('renders help images passed as image node', () => {
    const usHelpImage = (
      <span role="img" aria-label="rocket">
        🚀
      </span>
    );

    renderMediaUploadStep({ usHelpImage });
    expect(screen.getByLabelText('rocket')).toBeInTheDocument();
  });

  it('renders label', () => {
    renderMediaUploadStep({ usLabel: 'usLabel' });
    expect(screen.getByText('usLabel')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    renderMediaUploadStep({ usPlaceholder: 'usPlaceholder' });
    expect(screen.getByText('usPlaceholder')).toBeInTheDocument();
  });

  it('renders buttonText', () => {
    renderMediaUploadStep({ usButtonText: 'usButtonText' });
    expect(screen.getByText('usButtonText')).toBeInTheDocument();
  });

  it(`calls microapps' requestMedia API to get file while upload button is clicked`, () => {
    const allowedMimeTypes = ['image/jpeg', 'video/*', 'application/pdf'];
    renderMediaUploadStep({ usButtonText: 'usButtonText' });
    expect(requestMedia).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText('usButtonText'));
    expect(requestMedia).toHaveBeenCalledWith({ allowedMimeTypes });
  });
});
