import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';

Meteor.startup(() => {
  console.log(`Greetings from ${module.id}!`);
});

onPageLoad(sink => {
  sink.renderIntoElementById(
    'server-render-target',
    `Server time: ${new Date()}`
  );
});
