(function() {
	"use strict";
	//if exist return, else construct
	if(!window.comcgm) {
		window.comcgm = {};
	}
	if(!window.comcgm.extension) {
		window.comcgm.extension = {};
	}
	if("undefined" !== typeof window.comcgm.extension.loopdomain) {
		return ;
	}

	var that = {
		baseUrl: "http://static.caigoumi.com",
		rules: {
			shopping: /^http(s)?:\/\/(?:.*)\.(?:taobao|tmall)\.com/i,
			blacklist: /^http(s)?:\/\/(?:.*)\.(?:aliway|alimama|alibaba-inc|v2ex|zuanke8|github)\.com/i,
			mall: /^http(s)?:\/\/(?:.*\.)?(?:10000yao\.com|100wine\.com|111\.com\.cn|top\.111yao\.com|128cai\.com|12yao\.com|17mh\.com|17u\.cn|17ugo\.com|198tc\.com|1mall\.com|1youku\.com|2155\.com|21cake\.com|21yod\.com|228\.com\.cn|234\.cn|239buy\.com|24kjx\.com|360buy\.com|360kad\.com|360kxr\.com|365h\.com|5173tuan\.com|base\.51buy\.com|51hqt\.com|51ibaby\.com|51remai\.com|51talk\.com|51youpin\.com|55tuan\.com|5lux\.com|6666688888\.com|77zuo\.com|7cv\.com|7lk\.cn|800pharm\.com|818\.com|8791\.com|91yao\.com|95buy\.com|998\.com|99inn\.cc|9wow\.com\.cn|agcatton\.com|aidai\.com|aidibao\.cc|aimer\.com\.cn|aizhigu\.com\.cn|amazon\.cn|anngo\.net|anportshop\.com|anta\.cn|aolai\.com|aolaituan\.com|aoyou\.com|awotuan\.com|bagtree\.com|baiyjk\.com|search\.banggo\.com|tuan\.bangzhufu\.com|baobeigou\.com|baoxian\.com|bbhun\.com|bblfloor\.com|bedook\.cn|book\.beifabook\.com|benlai\.com|mkt\.beyond\.cn|binlun\.com\.cn|meituan\.com|bjypw\.com|safepass\.blemall\.com|blzoom\.com|detail\.bookuu\.com|boqii\.com|bosideng\.cn|buysku\.com|camel\.com\.cn|china-pub\.com|chinaskin\.cn|chris-tina\.com|cnrmall\.com|cnyu\.com|comagic\.cn|coo8\.com|d1\.com\.cn|dada360\.com|dakele\.com|daoyao\.com|dapu\.com|dhc\.net\.cn|didamall\.com|didatuan\.com|ehaier\.com|e-lining\.com|epetbar\.com|esprit\.cn|ezeroshop\.com|fashionls\.com|fclub\.cn|fenixmall\.com|flower-easy\.com|fuwa\.com|tianpin\.com|ganso\.com\.cn|gantuan\.com|gaojie\.com|gaole\.com|gaopeng\.com|gap\.cn|gdcct\.com|gewei\.com|giftport\.com\.cn|giordano\.com|girdear\.cn|gjw\.com|glamour-sales\.com\.cn|glituan\.com|go\.cn|gongtianxia\.com|gonpo\.cn|handuyishe\.com|hao24\.cn|haohaizi\.com|happigo\.com|hebaotuan\.com|hecha\.cn|hmeili\.com|hongxiutuan\.net|htjz\.com|hua\.com|idx\.com\.cn|igrandbuy\.com|ikappa\.com\.cn|ingping\.com|j1\.com|jajn\.com|item\.jd\.com|jianianle\.com|jianke\.com|jiayougo\.com|jinghua\.com|jiuxian\.com|jjlg\.com\.cn|jpeen\.com|jufengshang\.com|jumei\.com|junph\.com|justyle\.com|juyuewang\.com|jxdyf\.com|jxmall\.com|kadang\.com|keede\.com|kela\.cn|kissbb\.com|kuaishubao\.com|kypbuy\.com|laiyifen\.com|lamiu\.com|lashou\.com|leyou\.com\.cn|lhmart\.com|liebo\.com|lifevc\.com|liketuan\.com|linglongtuan\.com|lingshi\.com|liwai\.com|liwuyou\.com|longfeng\.com|longquan-baojian\.com|lovo\.cn|shop\.lumilady\.com|lvshou\.com|lzwg\.com|rax\.cn|list\.m18\.com|m360\.com\.cn|m6go\.com|maichawang\.com|maimaicha\.com|maimaix\.cn|maizuo\.com|manyalittle\.com|masamaso\.com|mbaobao\.com|meici\.com|meijing\.com|milier\.com|shop\.milipp\.com|miqi\.cn|miwei\.com|mmall\.com|mmloo\.com|mobi189\.com|moonbasa\.com|motherbuy\.com|muyingzhijia\.com|mxgogo\.com|mya123\.com|myxiequ\.com|nala\.com\.cn|napai\.cn|naruko\.com\.cn|new7\.com|newegg\.com\.cn|no5\.com\.cn|nonmin88\.com|nop\.cn|ocj\.com\.cn|okhqb\.com|onlyts\.cn|oohdear\.com|osa\.com\.cn|ouweiduo\.com|auction1\.paipai\.com|paixie\.net|panduola\.com|pb89\.com|pba\.cn|pinstore\.cn|podinns\.com|pupai\.cn|purcotton\.com|qfpay\.com|qiaopier\.com|qingaige\.cn|qinqin\.net|qipaimall\.com|quwan\.com|rosheskin\.cn|royaldesign\.com|s\.cn|saite\.com|list\.secoo\.com|sephora\.cn|sfbest\.com|shangpin\.com|sheyingtg\.com|shop\.vipshop\.com|shopin\.net|shuangtuan\.com|sifangtuan\.com|sportica\.cn|springtour\.com|staples\.cn|star365\.com|suning\.com|supuy\.com|taohv\.cn|taoshu\.com|tastev\.com|manage\.time100\.cn|tonlion\.com|tootoo\.cn|trioo\.com|tuan\.27\.cn|list\.xiu\.com|tuanlego\.com|tuanweihui\.com|tujia\.com|uemall\.com|uiyi\.cn|ujipin\.com|item\.ule\.com|v\.umiwi\.com|usashopcn\.com|utcbag\.com|uya100\.com|uzise\.com|vetuan\.com|vsigo\.cn|vsnoon\.com|wangfujing\.com|wangjiu\.com|wbiao\.cn|webitrader\.com|weimeituan\.com|wellness-online\.com\.cn|winenice\.com|winxuan\.com|wkol\.cn|wl\.cn|wodinghua\.com|womai\.com|wowsai\.com|woxiu\.com|wsyu\.com|wyn88\.com|x\.com\.cn|xiangqinyw\.com|xiangshe\.com|xiaoye\.com|xifuquan\.com|xilituan\.com|nws\.xinbaigo\.com|xipin\.me|xiugou\.com|xjh\.com|xoutshop\.cn|xtep\.com\.cn|yaofang\.cn|yaohongjiu\.com|yesmywine\.com|yichao\.cn|yidianda\.com|yiguo\.com|yihaodian\.com|yingtao\.me|yintai\.com|yinzuo100\.com|yksuit\.com|yohobuy\.com|yougou\.com|yuegoo\.cn|yummy77\.com|z\.cn|zgjf168\.com|zgshoes\.com|zhenpin\.com|zhiwo\.com|zm7\.cn|zocai\.com|zpsoso\.com|zuipin\.cn|product\.dangdang\.com|t\.dianping\.com|tuan\.elong\.com|product\.lefeng\.com|manzuo\.com|nuomi\.com|pztuan\.com|tuan\.qmango\.com|tuan\.qunar\.com|sasa\.com|item\.vancl\.com|item\.vjia\.com)/i,
			task: /^http(s)?:\/\/(?:.*\.)?(?:weibo)\.com/i,
			filter: /^http(s)?:\/\/(?:.*)\.(?:caigoumi)\.com/i,
			other: /^http(s)?:\/\/.*/i
		},
		utils: {
			A: function(a, b) {
				if (typeof b == "string") {
					a.innerHTML = b;
				} else {
					a.appendChild(b);
				}
				return b;
			},
			C: function(name) {
				return document.createElement(name);
			},
			T: function(name, no) {
				return document.getElementsByTagName(name)[no];
			},
			D: function(id) {
				var obj = document.getElementById(id);
				obj.parentNode.removeChild(obj);
			},
			addScript: function(content, inline, callback, async) {
				var head = that.utils.T("head", 0);
				var script = that.utils.C("script");
				script.type = "text/javascript";
				script.charset = "utf-8";
				if (inline) {
					script.text = content;
				} else {
					if (async) {
						script.setAttribute("defer", "");
						script.setAttribute("async", "true");
					}
					script.onload = script.onreadystatechange = function() {
						if (script.readyState && script.readyState != "loaded" && script.readyState != "complete") {
							return;
						} else {
							if (callback) {
								callback();
							}
							script.onload = script.onreadystatechange = null;
							script.parentNode.removeChild(script);
						}
					}
					script.src = content;
				}
				that.utils.A(head, script);
				if (inline && callback) {
					callback();
				}
			},
			getSuffix: function() {
				var d = new Date();
				var suffix = '?t=' + d.getFullYear() + (d.getMonth() + 1) + d.getDate();
				return suffix;
			},
			getScriptPath: function(path, params) {
				var url = that.baseUrl + path + that.utils.getSuffix();
				if(params) {
					for(var key in params) {
						url += "&" + key + "=" + params[key];
					}
				}
				return url;
			},
			parseURL: function(url){
				var a = document.createElement("a");
				a.href = url;
				return {
					source: url,
					protocol: a.protocol.replace(":", ""),
					host: a.hostname,
					port: a.port,
					query: a.search,
					params: (function(){
						var ret = {}, seg = a.search.replace(/^\?/, "").split("&"), len = seg.length, i = 0, s;
						for (; i < len; i++) {
							if (!seg[i]) {
								continue;
							}
							s = seg[i].split("=");
							ret[s[0]] = s[1];
						}
						return ret;
					})(),
					file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
					hash: a.hash.replace("#", ""),
					path: a.pathname.replace(/^([^\/])/, "/$1"),
					relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
					segments: a.pathname.replace(/^\//, "").split("/")
				};
			}
		},
		urlMatch: function(url) {
			for (var module in that.rules) {
				var pattern = that.rules[module];
				//console.log(module, url.match(pattern));
				if (pattern.test(url)) {
					var rt = {
						module: module
					};
					return rt;
				}
			}
			return false;
		},
		init: function(url) {
			var params = that.utils.parseURL(url);
			url = params.protocol + "://" + params.host;
			var rt = that.urlMatch(url);
			var module = rt.module;
			//console.log(rt, module);
			var script = false;
			switch(module) {
				case 'shopping':
					//script = that.utils.getScriptPath("/js/extension/shopping.min.js");
					//break;
				case 'blacklist':
					script = that.utils.getScriptPath("/api/loadjs/", {r: encodeURIComponent(url)});
					break;
				case 'mall':
					script = that.utils.getScriptPath("/js/extension/mall.min.js");
					break;
				case 'task':
					script = that.utils.getScriptPath("/js/extension/task.min.js");
				case 'filter':
					break;
				case 'other':
				default:
					//script = that.utils.getScriptPath("/js/extension/dev.js");
					break;
			}
			if(script) {
				that.utils.addScript(script, false, false, true);
			}
		}
	};
	that.init(window.location.href);

	window.comcgm.extension.loopdomain = that;
})();