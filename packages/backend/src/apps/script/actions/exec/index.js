import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Execute Script',
  key: 'executeScript',
  description: 'Execute the script',
  arguments: [
    {
        label: 'Script',
        key: 'script',
        type: 'string',
        required: false,
        description:
        'This field has a 2000 character limit. Any characters beyond 2000 will not be included.',
        variables: true,
    }
  ],

  async run($) {
    const script = $.step.parameters.script;

    const func = new Function(
        '$',
        script
    );

    $.setActionItem({
      raw: {
        result: func($),
      },
    });
  },
});
