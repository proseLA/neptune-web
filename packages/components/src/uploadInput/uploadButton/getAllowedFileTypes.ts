import { FileType } from '../../common';

const getAllowedFileTypes = (fileTypes: FileType[] | string[]): string[] =>
  fileTypes.map((fileTypeDefinition: string) =>
    fileTypeDefinition
      .split(',')
      .filter((extension) => !extension.includes('/')) // Filter out mime types
      .map((extension) => extension.replace('.', '').toUpperCase()) // Remove dot and convert extensions to uppercase to be displayed in the instructions
      .join(', '),
  );

export default getAllowedFileTypes;
