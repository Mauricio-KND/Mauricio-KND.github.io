/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Single Player
5. Init Fitvids


******************************/

$(document).ready(function () {
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	initMenu();
	initSinglePlayer();
	initFitVids();

	setHeader();

	$(window).on('resize', function () {
		setHeader();
	});

	$(document).on('scroll', function () {
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader() {
		if ($(window).scrollTop() > 91) {
			header.addClass('scrolled');
		}
		else {
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu() {
		if ($('.menu').length) {
			var hamb = $('.hamburger');
			var menu = $('.menu');
			var menuOverlay = $('.menu_overlay');

			hamb.on('click', function () {
				menu.addClass('active');
			});

			menuOverlay.on('click', function () {
				menu.removeClass('active');
			});
		}
	}

	/* 

	4. Init Single Player

	*/

	function initSinglePlayer() {
		if ($("#jplayer_1").length) {
			$("#jplayer_1").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title: "Jaw (KND ANLG RMX) / Kata Mercado / Techsound Records",
						artist: "Kata Mercado",
						mp3: "files/Jaw (KND ANLG RMX).mp3"
					});
				},
				play: function () { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_1",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 1.0,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}

		if ($("#jplayer_2").length) {
			$("#jplayer_2").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title: "Will Never Shine (KND Remix) / ÅNTÆGØNIST / Bad Reputation",
						artist: "ÅNTÆGØNIST",
						mp3: "files/Will Never Shine (KND Remix).mp3",
					});
				},
				play: function () { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_2",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 1.0,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}

		if ($("#jplayer_3").length) {
			$("#jplayer_3").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title: "Scorpio Rising (K.N.D. Remix) / Mike Humphries / Techsound Records",
						artist: "Mike Humphries",
						mp3: "files/Scorpio Rising K.N.D. Remix.mp3",
					});
				},
				play: function () { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_3",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 1.0,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}

		if ($("#jplayer_4").length) {
			$("#jplayer_4").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title: "Human Factor (KND Remix) / Modular Phaze, Gostwork / Mephyst",
						artist: "Modular Phaze, Gostwork",
						mp3: "files/Human Factor (KND Remix).mp3",
					});
				},
				play: function () { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_4",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 1.0,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}

		if ($("#jplayer_5").length) {
			$("#jplayer_5").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title: "Industrial Party (K.N.D. Remix) / The Zodiac / Bad Reputation",
						artist: "Teh Zodiac",
						mp3: "files/Industrial Party (K.N.D. Remix).mp3",
					});
				},
				play: function () { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_5",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				solution: 'html',
				preload: 'metadata',
				volume: 1.0,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});
		}
	}

	/* 

	5. Init Fitvids
	
	*/

	function initFitVids() {
		if ($('.video_container').length) {
			$('.video_container').fitVids();
		}
	}

});
