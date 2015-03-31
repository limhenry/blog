$(document).ready(function(){
        setTimeout("checkAds();", 1000);
});

function checkAds() {
        if ($(".adsense").height() == "0") {
                $(".adsense").after("<div class='alt'><h3>Don't like ads?</h3><p>Me neither.</p><p>But you should know that the ads on this site help pay for hosting, domain renewal, and keeping me motivated to make other oddball apps and websites.</p><p>Please consider disabling your adblock software for this domain. In return, I'll give you an appreciative high-five if we ever meet in real life.</p><p>-Tommy</p></div>");
        }
}