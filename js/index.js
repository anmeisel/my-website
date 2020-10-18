/*
 * MiniPreview v0.9
 *
 * @author  Will Boyd
 * Shared by Codegena
 */

// (function($) {
//     var PREFIX = 'mini-preview';
    
//     $.fn.miniPreview = function(options) {
//         return this.each(function() {
//             var $this = $(this);
//             var miniPreview = $this.data(PREFIX);
//             if (miniPreview) {
//                 miniPreview.destroy();
//             }

//             miniPreview = new MiniPreview($this, options);
//             miniPreview.generate();
//             $this.data(PREFIX, miniPreview);
//         });
//     };
    
//     var MiniPreview = function($el, options) {
//         this.$el = $el;
//         this.$el.addClass(PREFIX + '-anchor');
//         this.options = $.extend({}, this.defaultOptions, options);
//         this.counter = MiniPreview.prototype.sharedCounter++;
//     };
    
//     MiniPreview.prototype = {
//         sharedCounter: 0,
        
//         defaultOptions: {
//             width: 236,
//             height: 104,
//             scale: .25,
//             prefetch: 'pageload'
//         },
                
//         generate: function() {
//             this.createElements();
//             this.setPrefetch();
//         },

//         createElements: function() {
//             var $wrapper = $('<div>', { class: PREFIX + '-wrapper' });
//             var $loading = $('<div>', { class: PREFIX + '-loading' });
//             var $frame = $('<iframe>', { class: PREFIX + '-frame' });
//             var $cover = $('<div>', { class: PREFIX + '-cover' });
//             $wrapper.appendTo(this.$el).append($loading, $frame, $cover);
            
//             // sizing
//             $wrapper.css({
//                 width: this.options.width + 'px',
//                 height: this.options.height + 'px'
//             });
            
//             // scaling
//             var inversePercent = 100 / this.options.scale;
//             $frame.css({
//                 width: inversePercent + '%',
//                 height: inversePercent + '%',
//                 transform: 'scale(' + this.options.scale + ')'
//             });

//             // positioning
//             var fontSize = parseInt(this.$el.css('font-size').replace('px', ''), 10)
//             var top = (this.$el.height() + fontSize) / 2;
//             var left = (this.$el.width() - $wrapper.outerWidth()) / 2;
//             $wrapper.css({
//                 top: top + 'px',
//                 left: left + 'px'
//             });
//         },
        
//         setPrefetch: function() {
//             switch (this.options.prefetch) {
//                 case 'pageload':
//                     this.loadPreview();
//                     break;
//                 case 'parenthover':
//                     this.$el.parent().one(this.getNamespacedEvent('mouseenter'),
//                         this.loadPreview.bind(this));
//                     break;
//                 case 'none':
//                     this.$el.one(this.getNamespacedEvent('mouseenter'),
//                         this.loadPreview.bind(this));
//                     break;
//                 default:
//                     throw 'Prefetch setting not recognized: ' + this.options.prefetch;
//                     break;
//             }
//         },
        
//         loadPreview: function() {
//             this.$el.find('.' + PREFIX + '-frame')
//                 .attr('src', this.$el.attr('href'))
//                 .on('load', function() {
//                     // some sites don't set their background color
//                     $(this).css('background-color', '#fff');
//                 });
//         },
        
//         getNamespacedEvent: function(event) {
//             return event + '.' + PREFIX + '_' + this.counter;
//         },

//         destroy: function() {
//             this.$el.removeClass(PREFIX + '-anchor');
//             this.$el.parent().off(this.getNamespacedEvent('mouseenter'));
//             this.$el.off(this.getNamespacedEvent('mouseenter'));
//             this.$el.find('.' + PREFIX + '-wrapper').remove();
//         }
//     };
// })(jQuery);

//     $(function() {
//                 $('#titleframe a').miniPreview({ prefetch: 'pageload' });
//             });


$(document).ready(function(){
  $('#titleframe1').on('click', function(event) {        
     $('.panel1').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe2').on('click', function(event) {        
     $('.panel2').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe3').on('click', function(event) {        
     $('.panel3').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe4').on('click', function(event) {        
     $('.panel4').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe5').on('click', function(event) {        
     $('.panel5').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe6').on('click', function(event) {        
     $('.panel6').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe7').on('click', function(event) {        
     $('.panel7').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe8').on('click', function(event) {        
     $('.panel8').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe9').on('click', function(event) {        
     $('.panel9').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe10').on('click', function(event) {        
     $('.panel10').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe11').on('click', function(event) {        
     $('.panel11').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe12').on('click', function(event) {        
     $('.panel12').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe13').on('click', function(event) {        
     $('.panel13').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe14').on('click', function(event) {        
     $('.panel14').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe15').on('click', function(event) {        
     $('.panel15').toggle('show').siblings("div").hide();
  });
});
$(document).ready(function(){
  $('#titleframe16').on('click', function(event) {        
     $('.panel16').toggle('show').siblings("div").hide();
  });
});

$('div#title1').click(function() {
    $('.biginside1').slideToggle(200);
});

$('.menu:last-child').click(function() {
    $('.biginside2').slideToggle(200);
});

