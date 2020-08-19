<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>参考链接 https://www.imooc.com/article/21976</span>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  mounted() {
    var url = "http://www.javascript.com/SSO/index.php#first";
    this.getData(url, function (data) {
      var jsondata = JSON.parse(data);
      console.log(jsondata.name + " " + jsondata.age);
    });
  },
  methods: {
    getData(url, fn) {
      var iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = url;

      iframe.onload = function () {
        debugger
        fn(iframe.contentWindow.location.hash.substring(1));
        window.location.hash = "";
        document.body.removeChild(iframe);
      };

      document.body.appendChild(iframe);
    },
  },
};
</script>