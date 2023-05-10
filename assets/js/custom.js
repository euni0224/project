$(function () {
    history.scrollRestoration = "manual"
    //인트로
    gsap.set('body', { overflow: 'hidden'})
    intro = gsap.timeline({
        defaults: {
            duration: 0.6,
        }
    })
    intro
    .addLabel('b')
    .addLabel('c')
    .to('.hd-intro .intro-list .bg1', { yPercent: -10 },'b')
    .to('.hd-intro .intro-list .bg2', {delay: 0.1, yPercent: -8 },'b')
    .to('.hd-intro .intro-list .bg3', { delay: 0.2, yPercent: -6 },'b')
    .to('.hd-intro .intro-list .bg1', { delay: 0.25,yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg2', {delay: 0.35, yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg3', { delay: 0.45, yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg3 span',{yPercent: -110,stagger:0.3})
    .addLabel('a')
    .to('.hd-intro .intro-list .bg3', { delay: 1,yPercent: -200 },'a')
    .to('.hd-intro .intro-list .bg2', {delay: 1.15, yPercent: -200 },'a')
    .to('.hd-intro .intro-list .bg1', {delay: 1.25, yPercent: -200 },'a')
    .to('.hd-intro .hd-bg', {delay: 1.3, yPercent: -100 },'a')
    .to('.hd-intro', {delay: 1.3, yPercent: -100 },'a')
    .to('.intro-bottom', {delay: 1., yPercent: -100 },'a')
    .to('body',{'overflow': 'auto'})
    

    // 프로젝트 슬라이드


    //
		setupAnimations();

	function setupAnimations() {

		gsap.from(".stroke__wide", {
			drawSVG: "0%",
			delay: 1,
			scrollTrigger: {
				trigger: "main",
				start: "-10% top",
				end: "bottom+=30% bottom",
				scrub: 1
			}
		});

		gsap.from(".stroke__mask", {
			drawSVG: "0%",
			scrollTrigger: {
				trigger: "#page",
				start: "-7% top",
				end: "bottom+=20% bottom",
				scrub: 1
			}
		});

		gsap.from(".stroke__narrow", {
			"--dashOffset": 2000,
			scrollTrigger: {
				trigger: "main",
				start: "-10% top",
				end: "bottom+=30% bottom",
				scrub: 2
			}
		});

		gsap.set(".stroke__blob", {transformOrigin: "50% 100%"});
		gsap.from(".stroke__blob", {
			scale: 0.85,
			y: 3000,
			x: -500,
			rotate: 10,
			delay: 1,
			scrollTrigger: {
				trigger: "main",
				start: "center top",
				end: "bottom top",
				toggleActions: "restart pause resume reset",
				scrub: 1
			}
		});

	}
})