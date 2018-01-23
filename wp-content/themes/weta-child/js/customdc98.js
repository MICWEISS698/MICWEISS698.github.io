jQuery(document).ready(function(){
  jQuery('#ht_custom_avatar').click(function(){
       jQuery('#myModal').css('display' , 'block');
     });

     jQuery('.ht-close').click(function(){
       jQuery('#myModal').css('display' , 'none');
       jQuery('.ht_camera').hide();
       jQuery('.overlay').hide();
     });

   /* modal box end */

   jQuery('#ht_custom_edit').click(function(){
     jQuery('.ht_camera').show();
     jQuery('.overlay').show();
      jQuery(window).resize(function () {
     if (jQuery(window).width() < 500) {
     jQuery('#item-header-cover-image .edit').css('width','90%');
             jQuery('span.custom_edit_profile_link.ht_save').css({"padding-left": "8px", "padding-right": "8px"});
             jQuery('span.custom_edit_profile_link.ht_cancle').css({"margin-left": "4px", "padding-left": "9px", "padding-right":"9px"});
             jQuery('.pencil_icon').css({"padding-left": "7px", "border-radius":"9px"});
             jQuery('.pencil_icon').attr('style','width:101px !important');
             jQuery('a.pencil_link').css('left','48px');
         }
         }).resize();
   });
  jQuery('#ht_custom_cancle').live('click',function(){

  });
   /*jQuery('#ht_custom_avatar').click(function(){
     jQuery('#bp-browse-button').trigger('click');
   });*/

   jQuery('.avatar-crop-submit').click(function(){
     jQuery('.ht_camera').hide();
     jQuery('#myModal').hide();
   });

  jQuery('.kadii-member-menu').mouseover(function(){
      jQuery('#member_submenu').show();
  });
  jQuery('.kadii-member-menu').mouseleave(function(){
      jQuery('#member_submenu').hide();
  });
  jQuery('.kadii-member-menu').mouseover(function(){
      jQuery('#bpkadii_member_menu').show();
  });
  jQuery('.kadii-member-menu').mouseleave(function(){
      jQuery('#bpkadii_member_menu').hide();
  });
  jQuery('#bpkadii_member_menu').mouseover(function(){
      jQuery('#bpkadii_member_menu').show();
  });
  jQuery('#bpkadii_member_menu').mouseleave(function(){
      jQuery('#bpkadii_member_menu').hide();
  });

  jQuery('#ht_custom_edit').click(function(){
   var name         = jQuery('#ht_user_name').html();
   var description  = jQuery('#ht_member_description').html();
   jQuery('#ht_member_description').hide();
   jQuery('#ht_user_name').hide();
   jQuery('#ht_edit_desc').show();
   jQuery('#ht_user_name_box').show();
   jQuery('#ht_edit_desc').val(jQuery.trim(description));
   jQuery('#ht_user_name_box').val(jQuery.trim(name));
   jQuery('.ht_edit').hide();
   jQuery('.ht_save').show();
   jQuery('.ht_cancle').show();

 });

 jQuery('#ht_custom_cancle').click(function(){
    jQuery('.ht_edit').show();
    jQuery('.ht_save').hide();
    jQuery('.ht_cancle').hide();
    jQuery('.ht_camera').hide();
    jQuery('.overlay').hide();
    jQuery('#ht_edit_desc').hide();
    jQuery('#ht_user_name_box').hide();
    jQuery('#ht_user_name').show();
    jQuery('#ht_member_description').show();
 });

 jQuery('#ht_close').live('click' , function(){
   jQuery('#ht_error').remove();
 })

 jQuery('#ht_custom_save').click(function(){

  var description = jQuery('#ht_edit_desc').val();
   var name = jQuery('#ht_user_name_box').val();

   jQuery('.ht-spinner').show();
   jQuery.post(

       ajaxurl,
       {
           'action'      : 'ht_update_member_description',
           'description' : description,
           'name'        : name
       },

       function ( response ) {

             jQuery('.ht_edit').show();
             jQuery('.ht_save').hide();
             jQuery('.ht_cancle').hide();
             jQuery('.ht_camera').hide();
             jQuery('#ht_edit_desc').hide();
             jQuery('#ht_user_name_box').hide();
             if(response == 'true'){
               jQuery('#ht_member_description').html(description);
               jQuery('#ht_user_name').html(name);
             }else{
               jQuery('#ht_member_description').after('<p id="ht_error"> Error in saving please try again.. <span id="ht_close"> x </span></p>')
             }
             jQuery('.ht-spinner').hide();

             jQuery('#ht_user_name').show();
             jQuery('#ht_member_description').show();

       } );

 });
});
