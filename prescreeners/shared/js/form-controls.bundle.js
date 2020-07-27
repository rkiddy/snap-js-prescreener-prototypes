!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){function t(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){s=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(s)throw a}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}!function(){var e={showElem:function(e){return function(){var n=document.getElementById(e);n&&n.classList.contains("hidden")&&n.classList.remove("hidden")}},hideElem:function(e){return function(){var n=document.getElementById(e);n&&(n.classList.contains("hidden")||n.classList.add("hidden"))}},getElem:function(e){return document.getElementById(e)},toggleErrorStateHTML:function(e){return e?"":'<div class="usa-alert usa-alert--error usa-alert--slim">\n                    <div class="usa-alert__body" role="alert" aria-live="assertive">\n                        <em class="usa-alert__text">\n                            Please enter a number.\n                        </em>\n                    </div>\n                </div>'},validateNumberField:function(n){return function(t){var r=o.numberFieldValid(t);e.getElem(n).innerHTML=e.toggleErrorStateHTML(r)}}},n={VA:{apply:[{url:"https://commonhelp.dss.virginia.gov/CASWeb/faces/loginCAS.xhtml",description:"Apply online using CommonHelp. (You may have to create an account to apply.)"},{url:"https://www.dss.virginia.gov/localagency/index.cgi",description:"Apply at a local Social Services office near you."}],other_resources:[{url:"https://www.foodpantries.org/st/virginia",description:"Foodpantries.org"},{url:"https://www.feedingamerica.org/find-your-local-foodbank",description:"Feeding America"}]},IL:{apply:[{url:"https://abe.illinois.gov/abe/access/",description:"Apply online using ABE."}],other_resources:[{url:"https://www.dhs.state.il.us/page.aspx?item=31245",description:"Food Connections"}]}},o={showCitizenshipInfobox:e.showElem("citizenship_info_box"),hideCitizenshipInfobox:e.hideElem("citizenship_info_box"),showMedicalExpensesForElderlyOrDisabled:e.showElem("medical_expenses_for_elderly_or_disabled_question"),hideMedicalExpensesForElderlyOrDisabled:e.hideElem("medical_expenses_for_elderly_or_disabled_question"),showExplanationButton:e.showElem("show-explanation"),hideExplanationButton:e.hideElem("show-explanation"),showResultExplanation:e.showElem("result-explanation"),hideResultExplanation:e.hideElem("result-explanation"),showIncomeExplanationButton:e.showElem("show-income-explanation"),hideIncomeExplanationButton:e.hideElem("show-income-explanation"),showIncomeExplanation:e.showElem("income-explanation"),hideIncomeExplanation:e.hideElem("income-explanation"),hideErrors:e.hideElem("errors"),showErrors:e.showElem("errors"),hideResults:e.hideElem("results"),showResults:e.showElem("results"),numberFieldValid:function(e){var n=e.target.value;return""===n||!isNaN(parseInt(n))}},r={sendData:function(){var n,o={},i=t(e.getElem("prescreener-form").elements);try{for(i.s();!(n=i.n()).done;){var a=n.value;switch(a.type){case"select-one":o[a.id]=a.value;break;case"radio":o[a.name]=document.querySelector('input[name="'.concat(a.name,'"]:checked')).value;break;case"text":o[a.id]=a.value}}}catch(e){i.e(e)}finally{i.f()}console.log("jsonData",o);var l=document.getElementById("prescreener-form");o.state_or_territory=l.dataset.stateOrTerritory,o.use_emergency_allotment=l.dataset.useEmergencyAllotment;var s=new SnapAPI.SnapEstimateEntrypoint(o).calculate();r.responseToHTML(s)},responseToHTML:function(n){if("OK"!==n.status){o.hideResults(),o.hideExplanationButton(),o.hideResultExplanation();var t=r.responseErrorsToHTML(n.errors);return e.getElem("errors").innerHTML=t,void o.showErrors()}var i=r.responseResultToHTML(n),a=r.responseExplanationToHTML(n.eligibility_factors),l=r.responseIncomeExplanationToHTML(n.eligibility_factors);e.getElem("results").innerHTML=i,e.getElem("result-explanation").innerHTML=a,e.getElem("income-explanation").innerHTML=l,o.showResults(),o.hideErrors(),o.showExplanationButton(),o.hideResultExplanation(),o.hideIncomeExplanationButton(),o.hideIncomeExplanation(),window.scrollTo(0,document.body.scrollHeight)},responseErrorsToHTML:function(e){var n,o="<h1>Errors:</h1>",r=t(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;o+="<li>".concat(i,"</li>")}}catch(e){r.e(e)}finally{r.f()}return o},optionsHTML:function(e,n){var o,r='<div class="result-big">'.concat(n,"\n                            <ul>"),i=t(e);try{for(i.s();!(o=i.n()).done;){var a=o.value;r+='<li>\n                        <a href="'.concat(a.url,'" rel="noopener noreferrer">\n                            ').concat(a.description,"\n                        </a>\n                    </li>")}}catch(e){i.e(e)}finally{i.f()}return r+="</ul></div>"},responseResultToHTML:function(e){var t='<h1 id="results-section-title">Results:</h1>',o=e.estimated_eligibility,i=e.estimated_monthly_benefit,a=e.emergency_allotment_estimated_benefit,l=document.getElementById("prescreener-form").dataset.stateOrTerritory,s=n[l];if(!o)return t+='<div class="result-big">You <strong>might not</strong> be eligible for SNAP benefits.</div>\n                    <div class="result-big">This result is only an estimate based on your inputs, not an official application or decision. <strong>You can still apply for SNAP benefits</strong>.</div>',t+=r.optionsHTML(s.apply,"Ways to apply:"),t+=r.optionsHTML(s.other_resources,"Other resources for food assistance:");if(t+='<div class="result-big">You may be <b>eligible</b> for SNAP benefits.</div>',a&&i!==a){var c=a-i;t+='<div class="result-big">If you apply and are approved, your benefit may be $'.concat(i,' per month.</div><div class="result-big">Due to the current pandemic, you could receive an additional $').concat(c," per month. (This additional amount is temporary.)</div>")}else t+='<div class="result-big">If you apply and are approved, your benefit may be $'.concat(i," per month.</div>");return t+=r.optionsHTML(s.apply,"Ways to apply:")},responseExplanationToHTML:function(e){var n="";e.sort((function(e,n){return e.sort_order-n.sort_order})),n+='<a class="result-big explanation-link clicked">\n                    Why did I get this result?\n                </a>\n                <h2>SNAP requirements</h2>\n                <p>To be eligible for SNAP benefits, a household needs to meet three requirements:</p>';var o,r=t(e.filter((function(e){return"test"===e.type})));try{for(r.s();!(o=r.n()).done;){var i=o.value,a=i.name,l=i.result?"Pass":"Fail",s=i.result?"pass-green":"fail-red";n+="<h3>".concat(a,': <span class="').concat(s,'">').concat(l,"</span></h3>");var c,u=t(i.explanation);try{for(u.s();!(c=u.n()).done;){var d=c.value;n+="<p>".concat(d,"</p>")}}catch(e){u.e(e)}finally{u.f()}}}catch(e){r.e(e)}finally{r.f()}var p=e.filter((function(e){return"amount"===e.type}))[0];n+="<h2>".concat(p.name,"</h2>");var f,m=t(p.explanation);try{for(m.s();!(f=m.n()).done;){var h=f.value;n+="<p>".concat(h,"</p>")}}catch(e){m.e(e)}finally{m.f()}return n},responseIncomeExplanationToHTML:function(e){var n='<a class="explanation-link clicked">How are gross and net income calculated?</a>';e.sort((function(e,n){return e.sort_order-n.sort_order}));var o,r=t(e.filter((function(e){return"income"===e.type})));try{for(r.s();!(o=r.n()).done;){var i=o.value,a=i.name,l=i.explanation;n+="<h3>".concat(a,"</h3>");var s,c=t(l);try{for(c.s();!(s=c.n()).done;){var u=s.value;n+="<p>".concat(u,"</p>")}}catch(e){c.e(e)}finally{c.f()}}}catch(e){r.e(e)}finally{r.f()}return n}};e.getElem("prescreener-form").addEventListener("submit",(function(e){e.preventDefault(),r.sendData()})),e.getElem("input__all_citizens_question_true").addEventListener("change",(function(){o.hideCitizenshipInfobox()})),e.getElem("input__all_citizens_question_false").addEventListener("change",(function(){o.showCitizenshipInfobox()})),e.getElem("input__household_includes_elderly_or_disabled_true").addEventListener("change",(function(){o.showMedicalExpensesForElderlyOrDisabled()})),e.getElem("input__household_includes_elderly_or_disabled_false").addEventListener("change",(function(){o.hideMedicalExpensesForElderlyOrDisabled()})),e.getElem("show-explanation").addEventListener("click",(function(){o.showResultExplanation(),o.hideExplanationButton(),o.showIncomeExplanationButton()})),e.getElem("show-income-explanation").addEventListener("click",(function(){o.showIncomeExplanation(),o.hideIncomeExplanationButton()}));for(var i=function(){var n=l[a],t=e.getElem(n);t&&t.addEventListener("input",(function(t){e.validateNumberField("".concat(n,"_error_elem"))(t)}))},a=0,l=["monthly_job_income","monthly_non_job_income","resources","dependent_care_costs","medical_expenses_for_elderly_or_disabled","court_ordered_child_support_payments","rent_or_mortgage","homeowners_insurance_and_taxes","utility_costs"];a<l.length;a++)i()}()}]);