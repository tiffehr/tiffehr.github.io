var body = document.getElementsByTagName('body')[0],
    unlearning = remark.create({
      highlightLanguage: 'javascript',
      highlightStyle: 'monokai'
    }),
    pusher = new Pusher('5fe848d69253c2cc86bf'),
    channel = pusher.subscribe('unlearning');

console.log(channel);
channel.bind('next', function(data) { 
  unlearning.gotoNextSlide(); 
});