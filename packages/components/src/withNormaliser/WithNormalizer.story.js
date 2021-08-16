import { action } from '@storybook/addon-actions';
import { useState } from 'react';

import Select from '../select';
import Upload from '../upload';

import WithNormalizer from './WithNormalizer';

export default {
  component: WithNormalizer,
  title: 'WithNormalizer',
};

export const Basic = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [uploadValue, setUploadValue] = useState('');
  console.log('uploadValue', uploadValue);
  return (
    <>
      <h1>Normalizer test please DO NOT USE.</h1>
      <div className="m-t-3">
        <label htmlFor="inputTest">Input field with normalizer</label>
        <WithNormalizer>
          <input
            type="text"
            id="inputTest"
            className="form-control"
            onChange={(event) => setInputValue(event)}
          />
        </WithNormalizer>
        <div className="m-t-2">
          Returned Value: <b>{inputValue}</b>
        </div>
      </div>
      <div className="m-t-3">
        <label htmlFor="selectTest">Select field with normalizer</label>
        <WithNormalizer>
          <Select
            id="selectTest"
            size="md"
            placeholder="placeholder"
            inverse={false}
            block
            required
            searchPlaceholder="Search placeholder"
            options={[
              { header: 'Basic' },
              { value: 0, label: 'A thing', note: 'with a note' },
              { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
            ]}
            onChange={(v) => setSelectValue(v)}
          />
        </WithNormalizer>
        <div className="m-t-2">
          Returned Value: <b>{selectValue}</b>
        </div>
      </div>
      <div className="m-t-3">
        <label htmlFor="uploadTest">Upload field with normalizer</label>
        <WithNormalizer>
          <Upload
            id="uploadTest"
            animationDelay={700}
            csUploadText="Select other file?"
            csFailureText="Upload failed.Please, try again"
            csSuccessText="Upload complete!"
            csTooLargeMessage="Please provide a file smaller than 5MB"
            csWrongTypeMessage="Please provide a supported format"
            maxSize={500000}
            psUploadText="Cancel"
            psProcessingText="Uploading..."
            size="sm"
            usAccept="image/*"
            usUploadText="Or Select File"
            usDisabled={false}
            usDropMessage="Drop file to start upload"
            usLabel=""
            usPlaceholder="Drag and drop file less than 5MB"
            usHelpImage="https://github.com/transferwise.png"
            httpOptions={{
              url: 'https://httpbin.org/post',
              method: 'POST',
            }}
            onStart={(file) => action('onStart', file)}
            onSuccess={(httpResponse) => setUploadValue(httpResponse)}
            onFailure={(httpResponse) => setUploadValue(httpResponse)}
            onCancel={() => action('onCancel')}
          />
        </WithNormalizer>
        <div className="m-t-2">
          Returned Value: <b>Please check console for results</b>
        </div>
      </div>
    </>
  );
};
