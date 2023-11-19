import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, getSchemaPath } from '@nestjs/swagger';

export const ResponseDocs = (options: {
  status?: HttpStatus;
  description: string;
  type: any;
}) => {
  const { status = HttpStatus.OK, description, type } = options;
  const typeItem = Array.isArray(type) ? type[0] : type;
  const schemaPath = getSchemaPath(typeItem);

  return applyDecorators(
    ApiExtraModels(typeItem),
    ApiResponse({
      status,
      description,
      schema: {
        type: 'object',
        properties: {
          statusMessage: {
            type: 'string',
            readOnly: true,
            example: 'OK',
          },
          data: Array.isArray(type)
            ? {
                type: 'array',
                readOnly: true,
                items: { $ref: schemaPath },
              }
            : { $ref: schemaPath },
        },
        required: ['statusMessage', 'data'],
      },
    }),
  );
};
