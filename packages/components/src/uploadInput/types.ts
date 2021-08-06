import { Status } from '../common';

export type UploadError =
  | {
      message: string;
      [key: string]: any;
    }
  | string;

export type UploadResponse = {
  /**
   * Response must include a unique file id (used for deletion/identification)
   */
  id: string | number;

  /**
   * Optional URL for the uploaded file
   */
  url?: string;

  /**
   * Optionally set a translated error message when file was rejected
   */
  error?: UploadError;
  [key: string]: any;
};

export type UploadedFile = {
  /**
   * A unique id that is used for deleting the file and as a key
   */
  id: string | number;

  /**
   * The original filename of the uploaded file
   */
  filename?: string;

  /**
   * Optional. Current status of the file. If not defined, we treat the file as Status.SUCCEEDED
   */
  status?: Status;

  /**
   * Any API errors. The message should be localized.
   */
  error?: UploadError;

  /**
   * Optional. An external URL where the file can be opened from.
   */
  url?: string;

  /**
   * Any additional data
   */
  [key: string]: any;
};
