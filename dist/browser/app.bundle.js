webpackJsonp([0],[,function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=function(t){function e(e){var n=t.call(this,e)||this;return n.name=e.name,n.email=e.email,n.is_verified=e.is_verified,n}return r(e,t),e.prototype.getName=function(){return this.name},e.prototype.setName=function(t){return this.name=t,this},e.prototype.getEmail=function(){return this.email},e.prototype.setEmail=function(t){return this.email=t,this},e.prototype.isVerified=function(){return this.is_verified},e.prototype.setIsVerified=function(t){return this.is_verified=t,this},e}(o.default);e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.id=t.id,this.created_at=t.created_at,this.updated_at=t.updated_at}return t.prototype.getId=function(){return this.id},t.prototype.setId=function(t){return this.id=t,this},t.prototype.getCreated_at=function(){return this.created_at},t.prototype.setCreated_at=function(t){return this.created_at=t,this},t.prototype.getUpdated_at=function(){return this.updated_at},t.prototype.setUpdated_at=function(t){return this.updated_at=t,this},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(e,n){var r=e.data?e.data:{},o=r.map(function(e){return t.factory(n,e)});this.setData(o).setLinks(e.links).setMeta(e.meta)}return t.prototype.setData=function(t){return this.data=t,this},t.prototype.getData=function(){return this.data},t.prototype.setLinks=function(t){return this.links=t,this},t.prototype.getLinks=function(){return this.links},t.prototype.setMeta=function(t){return this.meta=t,this},t.prototype.getMeta=function(){return this.meta},t.factory=function(t,e){return new t(e)},t}();e.default=r},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,n){this.access_token=t,this.expires_in=e,this.refresh_token=n}return t.prototype.getAccessToken=function(){return this.access_token},t.prototype.setAccessToken=function(t){return this.access_token=t,this},t.prototype.getExpiresIn=function(){return this.expires_in},t.prototype.setExpiresIn=function(t){return this.expires_in=t,this},t.prototype.getRefreshToken=function(){return this.refresh_token},t.prototype.setRefreshToken=function(t){return this.refresh_token=t,this},t.prototype.toString=function(){return this.getAccessToken()},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(13),o=function(){function t(t){this.client=t}return t.prototype.get=function(t,e){return r.default.handle(this.client.get(t,e))},t.prototype.post=function(t,e){return r.default.handle(this.client.post(t,e))},t.prototype.put=function(t,e){return r.default.handle(this.client.put(t,e))},t.prototype.patch=function(t,e){return r.default.handle(this.client.patch(t,e))},t.prototype.del=function(t,e){return r.default.handle(this.client.delete(t,e))},t.prototype.setHeaders=function(t){for(var e in t)this.client.defaults.headers[e]=t[e];return this},t.prototype.getHeaders=function(){return this.client.defaults.headers},t.prototype.addHeader=function(t,e){return this.client.defaults.headers[t]=e,this},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.handle=function(t){return t},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t){this.base=t}return t.makeUser=function(t){return new r.default(t)},t.makeUserFromResponse=function(e){var n=e.data?e.data.data:{};return t.makeUser(n)},t.prototype.getUser=function(e){return this.base.get("/users/"+e).then(function(e){return t.makeUserFromResponse(e)})},t.prototype.getCurrentUser=function(){return this.getUser("me")},t.prototype.createUser=function(e,n,r){return this.base.post("/users",{name:e,email:n,password:r}).then(function(e){return t.makeUserFromResponse(e)})},t.prototype.updateUser=function(e,n,r){return void 0===e&&(e=""),void 0===n&&(n=""),void 0===r&&(r=""),this.base.patch("/users/me",{name:e,email:n,password:r}).then(function(e){return t.makeUserFromResponse(e)})},t.prototype.uploadProfilePicture=function(e){return this.base.post("/users/picture",{file:e}).then(function(e){return t.makeUserFromResponse(e)})},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),o=n(3),i=n(44),s=function(){function t(t){this.base=t}return t.makeChannelFromResponse=function(e){var n=e.data?e.data.data:{};return t.makeChannel(n)},t.makeChannel=function(t){return new r.default(t)},t.makeCollectionFromResponse=function(t){var e=t.data;return new o.default(e,r.default)},t.prototype.getChannel=function(e,n){return this.base.get("/teams/"+e+"/channels/"+n).then(function(e){return t.makeChannelFromResponse(e)})},t.prototype.createChannel=function(e,n,r,o,i){return void 0===i&&(i=!1),this.base.post("/teams/"+e+"/channels",{name:n,description:r,color:o,is_private:i}).then(function(e){return t.makeChannelFromResponse(e)})},t.prototype.updateChannel=function(e,n,r,o,i,s){return void 0===s&&(s=!1),this.base.patch("/teams/"+e+"/channels/"+n,{name:r,description:o,color:i,is_private:s}).then(function(e){return t.makeChannelFromResponse(e)})},t.prototype.getAllChannels=function(e,n,r){return void 0===n&&(n="1"),this.base.get("/teams/"+e+"/channels",{page:n,limit:r}).then(function(e){return t.makeCollectionFromResponse(e)})},t.prototype.deleteChannel=function(t,e){return this.base.del("/channels/"+e).then(function(t){return!0})},t.prototype.uploadMedia=function(t,e,n){return this.base.post("/channels/"+e+"/media").then(function(t){return(t.data?t.data.data:[]).map(function(t){return new i.default(t)})})},t}();e.default=s},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.name=e.name,n.description=e.description,n.color=e.color,n.type=e.type,n.user_id=e.user_id,n.team_id=e.team_id,n.owner=new i.default(e.owner),n.slug=e.slug,n}return r(e,t),e.prototype.getName=function(){return this.name},e.prototype.setName=function(t){return this.name=t,this},e.prototype.getDescription=function(){return this.description},e.prototype.setDescription=function(t){return this.description=t,this},e.prototype.getColor=function(){return this.color},e.prototype.setColor=function(t){return this.color=t,this},e.prototype.getType=function(){return this.type},e.prototype.setType=function(t){return this.type=t,this},e.prototype.getUser_id=function(){return this.user_id},e.prototype.setUser_id=function(t){return this.user_id=t,this},e.prototype.getTeam_id=function(){return this.team_id},e.prototype.setTeam_id=function(t){return this.team_id=t,this},e.prototype.getSlug=function(){return this.slug},e.prototype.setSlug=function(t){return this.slug=t,this},e.prototype.getOwner=function(){return this.owner},e.prototype.setOwner=function(t){this.owner=t},e}(o.default);e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(18),o=n(3),i=function(){function t(t){this.base=t}return t.makeTeamFromResponse=function(e){var n=e.data?e.data.data:{};return t.makeTeam(n)},t.makeTeam=function(t){return new r.default(t)},t.makeCollectionFromResponse=function(t){var e=t.data;return new o.default(e,r.default)},t.prototype.getTeam=function(e){return this.base.get("/teams/"+e).then(function(e){return t.makeTeamFromResponse(e)})},t.prototype.createTeam=function(e,n){return this.base.post("/teams",{name:e,description:n}).then(function(e){return t.makeTeamFromResponse(e)})},t.prototype.updateTeam=function(e,n,r){return this.base.patch("/teams/"+e,{name:n,description:r}).then(function(e){return t.makeTeamFromResponse(e)})},t.prototype.getAllTeams=function(e,n){return void 0===e&&(e="0"),this.base.get("/teams",{page:e,limit:n}).then(function(e){return t.makeCollectionFromResponse(e)})},t.prototype.deleteTeam=function(t){return this.base.del("/teams/"+t).then(function(t){return!0})},t}();e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=function(t){function e(e){var n=t.call(this,e)||this;return n.name=e.name,n.description=e.description,n.invitation_code=e.invitation_code,n.user_id=e.user_id,n.owner=e.owner,n.slug=e.slug,n}return r(e,t),e.prototype.getName=function(){return this.name},e.prototype.setName=function(t){return this.name=t,this},e.prototype.getDescription=function(){return this.description},e.prototype.setDescription=function(t){return this.description=t,this},e.prototype.getInvitation_code=function(){return this.invitation_code},e.prototype.setInvitation_code=function(t){return this.invitation_code=t,this},e.prototype.getUser_id=function(){return this.user_id},e.prototype.setUser_id=function(t){return this.user_id=t,this},e.prototype.getOwner=function(){return this.owner},e.prototype.setOwner=function(t){this.owner=t},e.prototype.getSlug=function(){return this.slug},e.prototype.setSlug=function(t){return this.slug=t,this},e}(o.default);e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(20),o=n(3),i=function(){function t(t){this.base=t}return t.makeMessageFromResponse=function(e){var n=e.data?e.data.data:{};return t.makeMessage(n)},t.makeMessage=function(t){return new r.default(t)},t.makeCollectionFromResponse=function(t){var e=t.data;return new o.default(e,r.default)},t.prototype.getMessage=function(e,n,r,o){return this.base.get("/teams/"+e+"/channels/"+n+"/threads/"+r+"/messages/"+o).then(function(e){return t.makeMessageFromResponse(e)})},t.prototype.createMessage=function(e,n,r,o,i){return this.base.post("/teams/"+e+"/channels/"+n+"/threads/"+r,{content:o,type:i}).then(function(e){return t.makeMessageFromResponse(e)})},t.prototype.updateMessage=function(e,n,r,o,i,s){return this.base.patch("/teams/"+e+"/channels/"+n+"/threads/"+r+"/messages/"+o,{content:i,type:s}).then(function(e){return t.makeMessageFromResponse(e)})},t.prototype.getAllMessages=function(e,n,r,o,i){return void 0===o&&(o="1"),this.base.get("/teams/"+e+"/channels/"+n+"/threads/"+r,{page:o,limit:i}).then(function(e){return t.makeCollectionFromResponse(e)})},t.prototype.deleteMessage=function(t,e,n,r){return this.base.del("/channels/"+e+"/threads/"+n+"/messages/"+r).then(function(t){return!0})},t}();e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(2),s=function(t){function e(e){var n=t.call(this,e)||this;return n.content=e.content,n.type=e.type,n.thread_id=e.thread_id,n.sender_id=e.sender_id,n.sender_type=e.sender_type,n.slug=e.slug,n.sender=new o.default(e.sender),n}return r(e,t),e.prototype.getSender=function(){return this.sender},e.prototype.setSender=function(t){return this.sender=t,this},e.prototype.getContent=function(){return this.content},e.prototype.setContent=function(t){return this.content=t,this},e.prototype.getType=function(){return this.type},e.prototype.setType=function(t){return this.type=t,this},e.prototype.getThread_id=function(){return this.thread_id},e.prototype.setThread_id=function(t){return this.thread_id=t,this},e.prototype.getSender_id=function(){return this.sender_id},e.prototype.setSender_id=function(t){return this.sender_id=t,this},e.prototype.getSender_type=function(){return this.sender_type},e.prototype.setSender_type=function(t){return this.sender_type=t,this},e.prototype.getSlug=function(){return this.slug},e.prototype.setSlug=function(t){return this.slug=t,this},e}(i.default);e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(22),o=n(3),i=function(){function t(t){this.base=t}return t.makeThreadFromResponse=function(e){var n=e.data?e.data.data:{};return t.makeThread(n)},t.makeThread=function(t){return new r.default(t)},t.makeCollectionFromResponse=function(t){var e=t.data;return new o.default(e,r.default)},t.prototype.getThread=function(e,n,r){return this.base.get("/teams/"+e+"/channels/"+n+"/threads/"+r).then(function(e){return t.makeThreadFromResponse(e)})},t.prototype.createThread=function(e,n,r,o){return this.base.post("/teams/"+e+"/channels/"+n+"/threads",{subject:r,description:o}).then(function(e){return t.makeThreadFromResponse(e)})},t.prototype.updateThread=function(e,n,r,o,i){return this.base.patch("/teams/"+e+"/channels/"+n+"/threads/"+r,{subject:o,description:i}).then(function(e){return t.makeThreadFromResponse(e)})},t.prototype.getAllThreads=function(e,n,r,o){return void 0===r&&(r="1"),this.base.get("/teams/"+e+"/channels/"+n+"/threads",{page:r,limit:o}).then(function(e){return t.makeCollectionFromResponse(e)})},t.prototype.deleteThread=function(t,e,n){return this.base.del("/channels/"+e+"/threads/"+n).then(function(t){return!0})},t}();e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.subject=e.subject,n.description=e.description,n.user_id=e.user_id,n.channel_id=e.channel_id,n.slug=e.slug,n.owner=new i.default(e.owner),n}return r(e,t),e.prototype.getOwner=function(){return this.owner},e.prototype.setOwner=function(t){return this.owner=t,this},e.prototype.getSubject=function(){return this.subject},e.prototype.setSubject=function(t){return this.subject=t,this},e.prototype.getDescription=function(){return this.description},e.prototype.setDescription=function(t){return this.description=t,this},e.prototype.getUser_id=function(){return this.user_id},e.prototype.setUser_id=function(t){return this.user_id=t,this},e.prototype.getChannel_id=function(){return this.channel_id},e.prototype.setChannel_id=function(t){return this.channel_id=t,this},e.prototype.getSlug=function(){return this.slug},e.prototype.setSlug=function(t){return this.slug=t,this},e}(o.default);e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(24);e.Base=r.default;var o=n(47);e.BaseApp=o.default;var i=n(48);e.Http=i;var s=n(51);e.Models=s;var u=n(52);e.Auth=u;var a=n(53);e.Services=a,e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=n(11),i=n(12),s=n(14),u=n(15),a=n(17),p=n(19),c=n(21),f=n(45),h=n(46),d=function(){function t(t,e){this.baseApp=t,this.httpClient=e,e||(this.httpClient=new i.default(r.default.create())),this.bootstrapServices()}return t.prototype.bootstrapServices=function(){this.userServiceObj=new s.default(this),this.teamServiceObj=new a.default(this),this.channelServiceObj=new u.default(this),this.teamMemberServiceObj=new f.default(this),this.channelMemberServiceObj=new h.default(this),this.messageServiceObj=new p.default(this),this.threadServiceObj=new c.default(this)},t.prototype.getHttpClient=function(){return this.httpClient},t.prototype.setHttpClient=function(t){this.httpClient=t},t.prototype.getApp=function(){return this.baseApp},t.prototype.setApp=function(t){this.baseApp=t},t.prototype.get=function(t,e){return void 0===e&&(e={}),this.prepare().httpClient.get(this.buildUrl(t),e)},t.prototype.post=function(t,e){return void 0===e&&(e={}),this.prepare().httpClient.post(this.buildUrl(t),e)},t.prototype.put=function(t,e){return void 0===e&&(e={}),this.prepare().httpClient.put(this.buildUrl(t),e)},t.prototype.patch=function(t,e){return void 0===e&&(e={}),this.prepare().httpClient.patch(this.buildUrl(t),e)},t.prototype.del=function(t,e){return void 0===e&&(e={}),this.prepare().httpClient.del(this.buildUrl(t),e)},t.prototype.prepare=function(){return this.addAuthHeaders(),this},t.prototype.addAuthHeaders=function(){this.httpClient.addHeader("X-CLIENT-ID",this.getApp().getClientId()).addHeader("X-CLIENT-SECRET",this.getApp().getClientSecret());var t=this.getApp().getAccessToken();t instanceof o.default&&this.httpClient.addHeader("Authorization","Bearer "+t.getAccessToken())},t.prototype.buildUrl=function(t){return this.getApp().getApiUrl().concat(t)},t.prototype.getUserAccessToken=function(t,e){return this.post("/users/login",{email:t,password:e}).then(function(t){var e=t.data.data;return new o.default(e.access_token,e.expires_in,e.refresh_token)})},t.prototype.userService=function(){return this.userServiceObj},t.prototype.channelService=function(){return this.channelServiceObj},t.prototype.teamService=function(){return this.teamServiceObj},t.prototype.threadService=function(){return this.threadServiceObj},t.prototype.messageService=function(){return this.messageServiceObj},t.prototype.channelMemberService=function(){return this.channelMemberServiceObj},t.prototype.teamMemberService=function(){return this.teamMemberServiceObj},t}();e.default=d},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=function(t){function e(e){var n=t.call(this,e)||this;return n.collection_name=e.collection_name,n.name=e.name,n.file_name=e.file_name,n.mime_type=e.mime_type,n.size=e.size,n.manipulations=e.manipulations,n.custom_properties=e.custom_properties,n.url=e.url,n}return r(e,t),e.prototype.getCollection_name=function(){return this.collection_name},e.prototype.setCollection_name=function(t){this.collection_name=t},e.prototype.getName=function(){return this.name},e.prototype.setName=function(t){this.name=t},e.prototype.getFile_name=function(){return this.file_name},e.prototype.setFile_name=function(t){this.file_name=t},e.prototype.getMime_type=function(){return this.mime_type},e.prototype.setMime_type=function(t){this.mime_type=t},e.prototype.getSize=function(){return this.size},e.prototype.setSize=function(t){this.size=t},e.prototype.getManipulations=function(){return this.manipulations},e.prototype.setManipulations=function(t){this.manipulations=t},e.prototype.getCustom_properties=function(){return this.custom_properties},e.prototype.setCustom_properties=function(t){this.custom_properties=t},e.prototype.getUrl=function(){return this.url},e.prototype.setUrl=function(t){this.url=t},e}(o.default);e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(3),i=function(){function t(t){this.base=t}return t.prototype.getTeamMember=function(t,e){return this.base.get("/teams/"+t+"/members/"+e).then(function(t){return new r.default(t.data.data)})},t.prototype.getAllTeamMembers=function(t,e,n){return void 0===e&&(e="1"),this.base.get("/teams/"+t+"/members",{page:e,limit:n}).then(function(t){return new o.default(t.data,r.default)})},t.prototype.addTeamMember=function(t,e){return this.base.post("/teams/"+t+"/members/",{user_id:e}).then(function(t){return!0})},t.prototype.removeTeamMember=function(t,e){return this.base.del("/teams/"+t+"/members/"+e).then(function(t){return!0})},t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(3),i=function(){function t(t){this.base=t}return t.prototype.getChannelMember=function(t,e,n){return this.base.get("/teams/"+t+"/channels/"+e+"/members/"+n).then(function(t){return new r.default(t.data.data)})},t.prototype.getAllChannelMembers=function(t,e,n,i){return void 0===n&&(n="1"),this.base.get("/teams/"+t+"/channels/"+e+"/members",{page:n,limit:i}).then(function(t){return new o.default(t.data,r.default)})},t.prototype.addChannelMember=function(t,e,n){return this.base.post("/teams/"+t+"/channels/"+e+"/members/",{user_id:n}).then(function(t){return!0})},t.prototype.removeChannelMember=function(t,e,n){return this.base.del("/teams/"+t+"/channels/"+e+"/members/"+n).then(function(t){return!0})},t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,n){this.clientId=t,this.clientSecret=e,this.apiUrl=n}return t.prototype.getApiUrl=function(){return this.apiUrl},t.prototype.setApiUrl=function(t){return this.apiUrl=t,this},t.prototype.setClientId=function(t){return this.clientId=t,this},t.prototype.setClientSecret=function(t){return this.clientSecret=t,this},t.prototype.getClientId=function(){return this.clientId},t.prototype.getClientSecret=function(){return this.clientSecret},t.prototype.getAccessToken=function(){return this.accessToken},t.prototype.setAccessToken=function(t){return this.accessToken=t,this},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(49);e.clients=r.default;var o=n(50);e.handlers=o.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12);e.AxiosHttpClient=r.default,e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(13);e.AxiosResponseHandler=r.default,e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.BaseModel=r.default;var o=n(3);e.BaseCollection=o.default;var i=n(1);e.User=i.default;var s=n(18);e.Team=s.default;var u=n(16);e.Channel=u.default;var a=n(22);e.Thread=a.default;var p=n(20);e.Message=p.default,e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11);e.AccessToken=r.default,e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=n(17),i=n(15),s=n(21),u=n(19);e.default={UserService:r.default,TeamService:o.default,ChannelService:i.default,ThreadService:s.default,MessageService:u.default}}],[23]);