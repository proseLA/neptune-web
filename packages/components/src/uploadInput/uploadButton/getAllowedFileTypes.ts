import { FileType } from '../../common';

const getAllowedFileTypes = (fileTypes: FileType[] | string[]): string[] =>
  fileTypes.map((fileTypeDefinition: string) =>
    fileTypeDefinition
      .split(',')
      .filter((ext) => !ext.includes('/')) // Filter out mime types
      .map((ext) => ext.replace('.', '').toUpperCase()) // Remove dot and convert extensions to uppercase to be displayed in the instructions
      .join(', '),
  );

export default getAllowedFileTypes;
