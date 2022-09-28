"use strict";

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dylan James - Software Engineer</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
      <script src="https://unpkg.com/@codersrank/skills-chart@0.9.2/codersrank-skills-chart.min.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="Dylan James" name="title" />
      <meta content="Just a little boring ole' cv." name="description" />
      <meta content="Just a little boring ole' cv." name="keywords" />
      <meta content="index, follow" name="robots" />
      <meta content="English" name="language" />
      <meta content="Team Tritan" name="author" />
      <meta property="og:title" content="Dylan James" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dylanjames.gay" />
      <meta property="og:description" content="Just a little boring ole' cv" />
      <link rel="icon" href="/avatar.jpg" />
      <meta name="theme-color" content="#5c9dff"></meta>
      <script
        type="text/javascript"
        src="https://www.wikplayer.com/code.js"
        data-config="{'skin':'skins/wikfull/plainBlack/skin.css','volume':50,'autoplay':false,'shuffle':true,'repeat':1,'showcomment':false,'marqueetexton':true,'placement':'top','showplaylist':false,'playlist':[{'title':'Comfortable','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqV5s5PZvM7Y'},{'title':'A%20Thousand%20Miles','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7G89ndbV9KM'},{'title':'Gym%20Class','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQdhbxdOaFBc'},{'title':'Soda','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1-GXOrIUZjQ'},{'title':'Hate%20the%20Other%20Side','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKVxuHBht-M0'},{'title':'Goodbyes','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5r8VMciYmVs'},{'title':'Say%20Goodbye','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSrbyhoMxRWE'},{'title':'Outer%20Space','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNFETLVHYcVY'},{'title':'A%20Thousand%20Times','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3jplWndpGWo'},{'title':'Blastoff','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DomGrk9CdjfQ'},{'title':'Soul%20Survivor','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dx1Rghrr9FUk'},{'title':'ROS','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-2AfeMnpiRI'},{'title':'Whats%20Poppin','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHIwAI05Y1fU'},{'title':'Mrs.%20Officer','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbuyMOuKDG74'},{'title':'The%20Eagles','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkMVAsu6GV24'},{'title':'Go','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_jgW0NpU8q8'},{'title':'Roll%20in%20Peace','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwoSEPCPW7gQ'},{'title':'Lucid%20Dreams','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_fh64GbFSw4'},{'title':'Bandit','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSw5fNI400E4'},{'title':'Just%20a%20Dream','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DN6O2ncUKvlg'},{'title':'Kiss%20me%20through%20the%20phone','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgFctTeA-vqE'},{'title':'Horses','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dk21EyuP202M'},{'title':'Let%20me%20love%20you','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Doc7N7yNGbT8'},{'title':'Vibez','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DU2JyeciEwSI'},{'title':'Blow%20My%20High','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYzSUK6BodAw'},{'title':'Poetic%20Justice','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7p1hnyIliF0'},{'title':'Got%20it%20on%20me','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAoQ298fufoA'},{'title':'Pure%20Cocaine','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsFIXA0zALWU'},{'title':'So%20Sick','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIxszlJppRQI'},{'title':'Without%20you','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLvB4GUTWDcI'},{'title':'Thrills','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRhMuTOueGIc'},{'title':'Not%20afraid','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DanUz77ElBK4'},{'title':'Down','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DehZECQUvMhE'},{'title':'Space%20Bound','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQlU69Z4Hu7A'},{'title':'Beautiful','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4HuTdB0MqoE'},{'title':'Twisted','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFOltfz7DoYw'},{'title':'Black%20Magic','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMFgYLPYXMXY'},{'title':'Beautiful%20Pain','url':'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrZ5eEJqd7c8'}]}"
      ></script>
      <Main />
      <NextScript />
    </Html>
  );
}
