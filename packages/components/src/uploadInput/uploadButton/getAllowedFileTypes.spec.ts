import getAllowedFileTypes from './getAllowedFileTypes';
import { FileType } from '../../common';

describe('getAllowedFileTypes', () => {
  let allowedFileTypes: string[];

  describe('using predefined FileTypes', () => {
    beforeAll(() => {
      allowedFileTypes = getAllowedFileTypes([FileType.PNG, FileType.JPG]);
    });

    it('parses allowed file extensions from FileType[] array', () => {
      expect(allowedFileTypes).toEqual(['PNG', 'JPG, JPEG']);
    });
  });

  describe('using custom file extensions and mime types', () => {
    const xls = '.xls,.xlm,application/vnd.ms-excel';
    const docx = '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    const doc = '.doc,application/msword';

    beforeAll(() => {
      allowedFileTypes = getAllowedFileTypes([xls, docx, doc]);
    });

    it('parses allowed file extensions from FileType[] array', () => {
      expect(allowedFileTypes).toEqual(['XLS, XLM', 'DOCX', 'DOC']);
    });
  });

  describe('when all file types are allowed', () => {
    beforeAll(() => {
      allowedFileTypes = getAllowedFileTypes(['*']);
    });

    it('should return the wildcard character', () => {
      expect(allowedFileTypes).toEqual(['*']);
    });
  });
});
