import { FileType } from '../../common';

import getAllowedFileTypes from './getAllowedFileTypes';

describe('getAllowedFileTypes', () => {
  let allowedFileTypes: string[];

  describe('using predefined FileTypes', () => {
    beforeAll(() => {
      allowedFileTypes = getAllowedFileTypes([FileType.PNG, FileType.JPG]);
    });

    it('parses allowed file extensions from FileType[] array', () => {
      expect(allowedFileTypes).toStrictEqual(['PNG', 'JPG, JPEG']);
    });
  });

  describe('using custom file extensions and mime types', () => {
    const xls = '.xls,.xlm,application/vnd.ms-excel';
    const docx = '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    const document_ = '.doc,application/msword';

    beforeAll(() => {
      allowedFileTypes = getAllowedFileTypes([xls, docx, document_]);
    });

    it('parses allowed file extensions from FileType[] array', () => {
      expect(allowedFileTypes).toStrictEqual(['XLS, XLM', 'DOCX', 'DOC']);
    });
  });

  describe('when all file types are allowed', () => {
    beforeAll(() => {
      allowedFileTypes = getAllowedFileTypes(['*']);
    });

    it('should return the wildcard character', () => {
      expect(allowedFileTypes).toStrictEqual(['*']);
    });
  });
});
