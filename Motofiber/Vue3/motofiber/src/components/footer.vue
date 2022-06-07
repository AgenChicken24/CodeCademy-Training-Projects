<template>
  <div class="footer">
      <link rel="stylesheet" href="css/footer-distributed-with-address-and-phones.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
      <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" media="all">
        <footer class="footer-distributed">
			<div class="footer-left">
				<h3><img src="../assets/Logos/logo.only.letters.png" alt="Image not found!"></h3>
				<p class="footer-links">
					<a target="_blank" rel="noopener" href="#">{{ $t('home') }}</a>
					·
					<a target="_blank" rel="noopener" href="#">{{ $t('about') }}</a>
					·
					<a target="_blank" rel="noopener" href="#">{{ $t('shop') }}</a>
					·
					<a target="_blank" rel="noopener" href="#">{{ $t('contacts') }}</a>
				</p>
				<p class="footer-company-name">MotoFiber © 2010</p>
			</div>
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>{{ $t('footerLocation') }}</span> ,{{ $t('footerLocationCountry') }}</p>
				</div>
				<div>
					<i class="fa fa-phone"></i>
					<p>+359 876665281</p> <br>
                    <i class="fa fa-phone"></i>
					<p>+359 876440448</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a target="_top" rel="noopener" href="https://mail.google.com/mail/u/1/#inbox?compose=new">motofiberbg@gmail.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>{{ $t('aboutFooter') }}</span>
					{{ $t('aboutFooterText') }}
				</p>
				<div class="footer-icons">
					<a target="_blank" rel="noopener" href="https://www.facebook.com/motofiberbulgaria/"><i class="fa fa-facebook"></i></a>
					<!-- <a target="_blank" rel="noopener" href="#"><i class="fa fa-twitter"></i></a> -->
					<a target="_blank" rel="noopener" href="https://www.instagram.com/motofiberbulgaria/"><i class="fa fa-instagram"></i></a>
					<!-- <a target="_blank" rel="noopener" href="#"><i class="fa fa-github"></i></a> -->
				</div>

			</div>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'footer',
}
</script>

<style scoped>
.footer {
    margin-top: 170px;
}
.footer-distributed {
    background-color: #292c2f;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 55px 50px;
    margin-top: 80px;
}
.footer-distributed .footer-left {
    width: 40%;
}
.footer-left img{
    margin-bottom: 50px;
}
.footer-distributed .footer-company-about span {
    display: block;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
}
.footer-distributed .footer-right {
    width: 20%;
}
.footer-distributed .footer-left, .footer-distributed .footer-center, .footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.footer-distributed .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
}
.footer-distributed .footer-icons {
    margin-top: 25px;
}
.footer-distributed .footer-links {
    color: #ffffff;
    margin: 20px 0 12px;
    padding: 0;
}
.footer-distributed .footer-company-name {
    color: #8f9296;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}
.footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 3px;
    margin-bottom: 5px;
}
.footer-distributed h3 {
    color: #ffffff;
    font: normal 36px 'Cookie', cursive;
    margin: 0;
}
.footer-distributed .footer-center {
    width: 35%;
}
.footer-distributed .footer-center p {
    display: inline-block;
    color: #ffffff;
    vertical-align: middle;
    margin: 0;
}
.footer-distributed .footer-center i {
    background-color: #33383b;
    color: #ffffff;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>