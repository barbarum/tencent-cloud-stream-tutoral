import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.stream.onCreated(function urlOnCreated() {
  this.url = new ReactiveVar("")
});

Template.stream.onRendered(function() {
  this.player = new TcPlayer('id_test_video', {
      "m3u8": "http://3891.liveplay.myqcloud.com/live/3891_user_ac616722_de8e.m3u8", //请替换成实际可用的播放地址
      "autoplay" : true,      //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
      "poster" : "https://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/product/mlvb/css/img/function/function-5.png",
      "width" :  '225',//视频的显示宽度，请尽量使用视频分辨率宽度
      "height" : '487',//视频的显示高度，请尽量使用视频分辨率高度
      "live": true,
      "wording": {
                      2032: "请求视频失败，请检查网络",
                      2048: "请求m3u8文件失败，可能是网络错误或者跨域问题"
                  }
  });
});

Template.stream.helpers({
  getStreamUrl() {
    return Template.instance().url.get()
  }
});

Template.stream.events({
  'change input'(event, instance) {
    instance.url.set($(event.currentTarget).val());
    instance.player.load(instance.url.get());
  }
});

Template.hello.onCreated(function helloOnCreated() {
  
});