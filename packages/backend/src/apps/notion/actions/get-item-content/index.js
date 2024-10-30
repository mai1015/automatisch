import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Get item content',
  key: 'getItemContent',
  description: 'Read the content from database.',
  arguments: [
    {
      label: 'PageId',
      key: 'pageId',
      type: 'string',
      required: true,
      description:
        'The page id of the item to read the content from.',
      variables: true,
    },
  ],

  async run($) {
    const pageId = $.step.parameters.pageId;

    const { data } = await $.http.get(
      `/v1/blocks/${pageId}/children?page_size=100`
    );

    $.setActionItem({
      raw: data.results[0],
    });
  },
});
