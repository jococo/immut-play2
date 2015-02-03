define(['knockout'], function(ko) {

  function TitleVM(params) {
    // nothing needed for title
  }

  ko.components.register('my-title', {
    viewModel: TitleVM,
    template: {require: 'text!ko/title-template.html'}
  });
});