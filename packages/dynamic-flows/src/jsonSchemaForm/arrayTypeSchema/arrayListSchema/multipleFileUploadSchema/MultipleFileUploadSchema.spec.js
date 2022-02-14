import { UploadInput } from '@transferwise/components';

import { FetcherProvider } from '../../../../common/contexts/fetcherContext';
import { mount } from '../../../../test-utils';

import MultipleFileUploadSchema from './MultipleFileUploadSchema';

describe('Given a Multiple File Upload array schema', () => {
  const accepts = ['image/png', 'image/jpg', 'application/pdf'];
  const maxSize = 5242;
  const description = 'PNG, JPG, or PDF, less than 5mb';
  const idProperty = 'responseKey';
  const param = 'bodyAttribute';
  const multipleFileUploadSchemaObject = {
    type: 'array',
    minItems: 1,
    maxItems: 2,
    items: {
      title: 'Invoice (optional)',
      description,
      type: 'string',
      persistAsync: {
        url: 'http://localhost:3001/v1/save-file/',
        method: 'POST',
        param,
        idProperty,
        schema: {
          type: 'string',
          format: 'base64url',
          maxSize,
          accepts,
          validationMessages: {
            maxSize: 'Your file is too large',
          },
        },
      },
    },
    validationMessages: {
      minItems: 'minimum items not met error (from schema)',
      maxItems: 'maximum items uploaded already (from schema)',
    },
  };

  const testFile = new File([], 'test-file.pdf');

  const onChangeSpy = jest.fn();
  const mockFetcher = jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: jest.fn().mockResolvedValue({ [idProperty]: 'mockFileId' }),
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the SchemaFormControl passing the props required for UploadInput component', () => {
    const component = mount(
      <FetcherProvider fetcher={mockFetcher}>
        <MultipleFileUploadSchema
          disabled={false}
          submitted={false}
          model={[]}
          schema={multipleFileUploadSchemaObject}
          onChange={onChangeSpy}
        />
      </FetcherProvider>,
    );

    const uploadInputComponent = component.find(UploadInput);
    expect(uploadInputComponent).toBeTruthy();
    expect(uploadInputComponent.props()).toStrictEqual({
      files: [],
      maxFiles: 2,
      maxFilesErrorMessage: multipleFileUploadSchemaObject.validationMessages.maxItems,
      className: 'form-control',
      fileInputName: expect.any(String),
      fileTypes: accepts,
      sizeLimit: maxSize,
      disabled: false,
      description,
      multiple: true,
      onFilesChange: expect.any(Function),
      onDeleteFile: expect.any(Function),
      onUploadFile: expect.any(Function),
    });
  });

  it('should return a promise with object structure as expected by the UploadInput component when upload successful', async () => {
    const component = mount(
      <FetcherProvider fetcher={mockFetcher}>
        <MultipleFileUploadSchema
          model={[]}
          submitted={false}
          schema={multipleFileUploadSchemaObject}
          onChange={onChangeSpy}
        />
      </FetcherProvider>,
    );

    const uploadInputComponent = component.find(UploadInput);
    const { fileInputName, onUploadFile } = uploadInputComponent.props();

    const fileUploadData = new FormData();
    fileUploadData.append(fileInputName, testFile);

    const response = onUploadFile(fileUploadData);
    await flushPromises();

    expect(response).toStrictEqual(expect.any(Promise));

    await expect(response).resolves.toStrictEqual({
      data: 'mockFileId',
      id: 'mockFileId',
    });
  });

  it('should return a promise with object structure as expected by the UploadInput component, when upload fails', async () => {
    const errorMessage = 'Error uploading';
    mockFetcher.mockReset();
    mockFetcher.mockResolvedValue({
      ok: false,
      status: 422,
      json: jest.fn().mockResolvedValue({ validation: { [param]: errorMessage } }),
    });

    const component = mount(
      <FetcherProvider fetcher={mockFetcher}>
        <MultipleFileUploadSchema
          model={[]}
          submitted={false}
          schema={multipleFileUploadSchemaObject}
          onChange={onChangeSpy}
        />
      </FetcherProvider>,
    );

    const uploadInputComponent = component.find(UploadInput);
    const { fileInputName, onUploadFile } = uploadInputComponent.props();

    const fileUploadData = new FormData();
    fileUploadData.append(fileInputName, testFile);

    const response = onUploadFile(fileUploadData);
    await flushPromises();

    expect(response).toStrictEqual(expect.any(Promise));

    await expect(response).rejects.toStrictEqual({
      message: errorMessage,
      id: expect.any(Number),
    });
  });
});

const flushPromises = () => new Promise(process.nextTick);
