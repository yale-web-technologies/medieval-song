const util = {
  annotationTooltipTextTemplate: Handlebars.compile(
    '<p class="song-instance" data-song-instance-id="{{id}}">{{content}}</p>'),

  truncate: function (html, maxLen) {
    var text = html.replace(/<(?:.|\n)*?>/gm, ''); // remove tags
    text = text.replace(/&.*?;/gm, ''); // remove HTML escapes

    if (text.length > maxLen) {
      return text.slice(0, maxLen-3) + '...';
    } else {
      return text;
    }
  }
};

export default util;
