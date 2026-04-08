var SHEET_ID='1CC_J-IhuktNHsul-C01gHUs38r9LvWheMDU9lcVjkOg';
var CL=['#1A3A6B','#2D6A4F','#7B2D8B','#B03A2E','#D35400','#1A5276','#196F3D','#6E2FBF','#0E6655','#7D6608','#1A6B4A','#6B1A3A'];
var ACTIVE_TOPIC='';
var TOPIC_RULES=[
  {id:'security',label:'×‘×™×˜×—×•×Ÿ',terms:['×‘×™×˜×—×•×Ÿ','security','defense','defence','idf','8200','×ž×•×“×™×¢×™×Ÿ','military','national security','defense tech','×©×¨×™×•×Ÿ','dual use']},
  {id:'policy',label:'×ž×“×™× ×™×•×ª ×•×§×•× ×’×¨×¡',terms:['×§×•× ×’×¨×¡','congress','house of representatives','policy','public policy','×ž×“×™× ×™×•×ª','×ž×ž×©×œ','government','×›× ×¡×ª','×”×‘×™×ª ×”×œ×‘×Ÿ','senate']},
  {id:'tech',label:'×˜×›× ×•×œ×•×’×™×” ×•-AI',terms:['technology','tech','ai','artificial intelligence','innovation','×—×“×©× ×•×ª','×˜×›× ×•×œ×•×’×™×”','data','cyber','meta','product']},
  {id:'economy',label:'×›×œ×›×œ×” ×•×”×©×§×¢×•×ª',terms:['economics','economic','economy','finance','banking','investment','investments','private equity','vc','venture','×›×œ×›×œ×”','×”×©×§×¢×•×ª','××•×¦×¨','×‘× ×§ ×¢×•×œ×ž×™']},
  {id:'academia',label:'××§×“×ž×™×” ×•×ž×—×§×¨',terms:['research','academic','academia','harvard','yale','princeton','oxford','georgetown','university','××§×“×ž×™×”','×ž×—×§×¨','×¡×˜×•×“× ×˜','candidate']},
  {id:'law',label:'×ž×©×¤×˜ ×•×“×™×¤×œ×•×ž×˜×™×”',terms:['law','legal','attorney','lawyer','×ž×©×¤×˜','×ž×©×¤×˜×Ÿ','×“×™×¤×œ×•×ž×˜×™×”','×©×’×¨×™×¨','××•\"×','un','foreign affairs']}
];
// Columns in sheet: 0=Timestamp,1=×©× ×¤×¨×˜×™,2=×©× ×ž×©×¤×—×”,3=LinkedIn,4=×ª×¤×§×™×“,5=×ž×™×§×•×,6=×‘×™×• ×§×¦×¨,7=×‘×™×• ×ž×¤×•×¨×˜,8=××™×ž×™×™×œ,9=×˜×œ×¤×•×Ÿ,10+=×ª×ž×•× ×”
var MEMBERS=[
  {n:'××•×¤×™×¨ ×›×”×Ÿ',r:'×ž×•×¢×ž×“ ×œ-MPA, Princeton University',loc:'Princeton, NJ',li:'https://www.linkedin.com/in/ofir-cohen-innovation',em:'ofir.c@princeton.edu',bs:'×™×•×¢×¥ ×œ×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª, ×—×“×©× ×•×ª ×•×˜×›× ×•×œ×•×’×™×”. ×œ×©×¢×‘×¨ ×™×•×¢×¥ ×‘×‘×™×ª ×”× ×‘×—×¨×™× ×”××ž×¨×™×§××™ ×•×¨××© ×ž×˜×” ×‘-DNAidea.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQGBNlwhEG6MwQ/profile-displayphoto-shrink_800_800/B4DZW1jyJSHAAo-/0/1742507811720?e=1776902400&v=beta&t=QbTyfk37kKQyXBlqTEGOPLRnJrleHsjZSinDqL-3eiQ'},
  {n:'××¨×™××œ ×©×˜×™×™× ×‘×¨×’',r:'×”×‘× ×§ ×”×¢×•×œ×ž×™',loc:'Washington, DC',li:'https://www.linkedin.com/in/ariel-steinberg-090b89110/',em:'arielsteinberg2@gmail.com',bs:'8200 ×œ×ž×©×š ×¢×©×•×¨, ×’×•×’×œ ×‘××™×¨×•×¤×”, ×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª ×‘×§× ×“×™ ×¡×§×•×œ. ×¢×•×¡×§ ×‘×”×©×§×¢×•×ª ×™×¨×•×§×•×ª ×‘×“×’×© ×¢×œ ×ž×™×—×–×•×¨.',ph:'https://media.licdn.com/dms/image/v2/D4E03AQGzBpHPYGDljQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682957867726?e=1776902400&v=beta&t=0ldYSG5g7Lg8Q9ZjEVWXTerJyPcNEJoi1-nZv-PGJHA'},
  {n:'×ž×©×” ×—× ×•×›×”',r:'×§×©×¨×™ ×ž×ž×©×œ ×œ×ª×¢×©×™×™×” ×”××•×•×™×¨×™×ª',loc:'Washington, DC',li:'https://www.linkedin.com/search/results/all/?keywords=%D7%9E%D7%A9%D7%94%20%D7%97%D7%A0%D7%95%D7%9B%D7%94',em:'Mosheh4@gmail.com',bs:'×¢×•×¨×š ×“×™×Ÿ ×•××™×© ×¦×™×‘×•×¨. ×œ×©×¢×‘×¨ ×™×•×¢×¥ ×©×¨ ×”×›×œ×›×œ×”, ×—×‘×¨ ×ž×•×¢×¦×ª ×”×¢×™×¨ ×”×•×“ ×”×©×¨×•×Ÿ ×•×¨×ž×´×˜ ×™×•×´×¨ ×”×ª×¢×©×™×™×” ×”××•×•×™×¨×™×ª. ×›×™×•× ×¤×•×¢×œ ×‘×ª×—×•× ×§×©×¨×™ ×ž×ž×©×œ ×‘×•×•×©×™× ×’×˜×•×Ÿ.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQF8uivZRattLQ/profile-displayphoto-crop_800_800/B4DZo8pkCBJAAI-/0/1761954121440?e=1776902400&v=beta&t=fbQWif6rX8uAXa8uQGjHN1EF2Dakg35cX9rVNiUF6aw'},
  {n:'××‘×™×” ×œ×™×‘×¨×ž×Ÿ',r:'MPP ×‘××•× ×™×‘×¨×¡×™×˜×ª ×™×™×œ (×¤×•×œ×‘×¨×™×™×˜)',loc:'New Haven, CT',li:'https://www.linkedin.com/in/avia-liberman/',em:'avia.liberman@yale.edu',bs:'×™×•×¢×¦×ª ×›×œ×›×œ×” ×•×‘×™×˜×—×•×Ÿ. ×¨×ž×´×“ ×ž×—×§×¨ ×‘×ž×•×“×™×¢×™×Ÿ, ×¦×•×•×ª ×‘×™×˜×—×•×Ÿ ×œ××•×ž×™ ×‘×›×œ×›×œ× ×™×ª ×”×¨××©×™×ª ×‘×ž×©×¨×“ ×”××•×¦×¨, ×¦×•×•×ª ×™×©×¨××œ ×‘××’×£ ×”×›×œ×›×œ×™ ×‘-OECD ×•×—×•×§×¨×ª ×‘×ž×›×•×Ÿ ×ª×›×œ×™×ª.',ph:'https://media.licdn.com/dms/image/v2/D4E03AQG0pCi-WNT-AA/profile-displayphoto-crop_800_800/B4EZmcadL.IMAI-/0/1759265806393?e=1776902400&v=beta&t=E47sTuTMZmjgWI53vacSjsjCF3XOE0jX_VyTztk__is'},
  {n:'× ×“×‘ ×©×•××˜',r:'×¡×’×Ÿ ×”×¦×™×¨ ×”×›×œ×›×œ×™ ×©×œ ×™×©×¨××œ ×‘×•×•×©×™× ×’×˜×•×Ÿ',loc:'Washington, DC',li:'https://www.linkedin.com/in/nadavshoat',em:'nadav.shoat@gmail.com',bs:'Director of Economic Strategy. ×ž×§×“× ×ž×“×™× ×™×•×ª ×ž×•×œ ×”×‘×™×ª ×”×œ×‘×Ÿ, ×ž×©×¨×“ ×”××•×¦×¨ ×”××ž×¨×™×§××™ ×•×ž×—×œ×§×ª ×”×ž×“×™× ×”, ×•×ž×•×¢×ž×“ ×œ-MPM ×‘×’×³×•×¨×’×³×˜××•×Ÿ.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQFjz200hxIZkQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680563910767?e=1776902400&v=beta&t=9AAuGqNuFxJdK3HEs54eEOszokeKCZ45MBc-2pkNNFA'},
  {n:'××•×¨×™ ×× ×’×³×œ',r:'×œ×©×¢×‘×¨ ×¡×ž× ×›×´×œ ×‘××¨×’×•×Ÿ ×”×’×’ ×”×¡×‘×™×‘×ª×™ Life and Environment',loc:'Oxford, England',li:'https://www.linkedin.com/in/uri-angel',em:'uriangelovadya@gmail.com',bs:'×¡×˜×•×“× ×˜ ×œ×ª×•××¨ ×©× ×™ ×‘-Energy Systems ×‘××•×§×¡×¤×•×¨×“, ×¢× ×¨×§×¢ ×‘×™×–×ž×•×ª ×¡×‘×™×‘×ª×™×ª, ×›×œ×›×œ×ª ×× ×¨×’×™×”, ×ž×“×™× ×™×•×ª ××§×œ×™× ×•×ž×™× ×¨×œ×™× ×§×¨×™×˜×™×™×.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQHFc76gminvPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703652748039?e=1776902400&v=beta&t=a630DOXV8CGnWl3S3phIjr3UO3N6XoH5XSTnwXBnFv4'},
  {n:'Aaron Simpson-Grossman',r:'Legal Officer, IDF Ã¢â‚¬â€ Incoming Wharton MBA',loc:'Tel Aviv Ã¢â€ â€™ Philadelphia',li:'https://www.linkedin.com/in/aaron-s-g/',em:'aaronsimpsongrossman@gmail.com',bs:'5 years as IDF officer and lawyer (MAG Corps), shaping Israeli legal strategy before the ICJ. LLB+BA magna cum laude (Hebrew U), MSc Finance summa cum laude (TAU). Incoming Wharton MBA.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQF6lqlcPp7sqA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696317551725?e=1776902400&v=beta&t=yxLjzda4DrfLE3htd5yyGH8Ph3n9RZZBl-VoZsdg-kc'},
  {n:'×¨×•×ª× ××•×¨×’-×§×œ×™×¡×§×™',r:'×”×ž×™×™×¡×“ ×•×”×ž× ×”×œ ×©×œ LIBRAEL',loc:'×ª×œ ××‘×™×‘',li:'https://www.linkedin.com/in/rotem-a-oreg/',em:'rotem.a.oreg@gmail.com',bs:'×—×•×§×¨, ×™×•×¢×¥ ×•×ž×¨×¦×” ×¢×œ ×”×¤×•×œ×™×˜×™×§×” ×•×ž×“×™× ×™×•×ª ×”×—×•×¥ ×©×œ ××¨×”×´×‘. ×ž×™×™×¡×“ ×•×ž× ×”×œ ××ª LIBRAEL, ×™×•×–×ž×” ×”×ž×—×‘×¨×ª ×‘×™×Ÿ ×™×©×¨××œ ×œ××ž×¨×™×§×” ×”×œ×™×‘×¨×œ×™×ª.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQGxAvhbRUQc5g/profile-displayphoto-shrink_800_800/B4DZO7gUvrHYAc-/0/1734017634216?e=1776902400&v=beta&t=63RM4Mia2vDnzVphEp-_TqgoXYkNOuR2Gfj0VLONkuw'},
  {n:'×“×•×“ ×¡×œ×•×ž×•×Ÿ',r:'×™×•×¢×¥ ×œ×©×’×¨×™×¨ ×™×©×¨××œ ×‘××•×´×',loc:'New York',li:'https://www.linkedin.com/in/davidsalomon-ny',em:'Dudy.sal10@gmail.com',bs:'×œ×©×¢×‘×¨ ×™×•×¢×¥ ×¤×•×œ×™×˜×™ ×‘×›× ×¡×ª, ×¡×•×¤×¨ ×¤×¨×•×–×” ×•×œ×•×—× ×‘×™×—×™×“×” ×ž×™×•×—×“×ª. ×›×™×•× ×™×•×¢×¥ ×œ×©×’×¨×™×¨ ×™×©×¨××œ ×‘××•×´× ×‘× ×™×• ×™×•×¨×§.',ph:'https://media.licdn.com/dms/image/v2/D4E03AQGTtjCNPgqZwQ/profile-displayphoto-crop_800_800/B4EZzHAQcuGoAI-/0/1772865259883?e=1776902400&v=beta&t=OYFaEKxkUx1wwm_TcUvHcB8TLRYlLub5g7o-NdtGE6Y'},
  {n:'×‘× ×™×” ×©×¨×œ×•',r:'×ž×™×™×¢×¥ ×œ×§×¨× ×•×ª ×”×•×Ÿ ×¡×™×›×•×Ÿ ×‘×“×™×¤× ×¡ ×•×˜×§',loc:'Silicon Valley',li:'https://www.linkedin.com/in/benaya-cherlow/',em:'cherlow7@gmail.com',bs:'×™×•×¢×¥ ×™×—×¡×™ ×—×•×¥ ×‘×§×•× ×’×¨×¡, ×§×¦×™×Ÿ ×§×©×¨×™ ×—×•×¥ ×•×‘×¢×œ ×ª×•××¨ ×©× ×™ ×ž-Syracuse University. ×›×™×•× ×ž×—×‘×¨ ×‘×™×Ÿ ×ª×œ ××‘×™×‘, ×•×•×©×™× ×’×˜×•×Ÿ ×•×¡×™×œ×™×§×•×Ÿ ×•××œ×™ ×‘×ª×—×•× ×”×‘×™×˜×—×•×Ÿ ×”×œ××•×ž×™.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQG1jIrM_75UtQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671546068575?e=1776902400&v=beta&t=Bx0elvutne235xktTFCYdQgs5rNwpCgxVU6ClOIxOCw'},
  {n:'×©×ž×¢×•×Ÿ ×¨×¤××œ×™',r:'×™×•×¢×¥ ×ž×“×™× ×™ ×œ×©×¢×‘×¨ ×œ×©×¨ ×œ×¢× ×™×™× ×™× ××¡×˜×¨×˜×’×™×™×, ×¨×•×Ÿ ×“×¨×ž×¨',loc:'×™×©×¨××œ',li:'https://www.linkedin.com/in/shimon-refaeli-0587b419a',em:'shimonrefaeli5@gmail.com',bs:'×‘×¢×œ × ×™×¡×™×•×Ÿ ×‘×ž×•×¢×¦×” ×œ×‘×™×˜×—×•×Ÿ ×œ××•×ž×™ ×•×‘×—×“×¨ ×ž×¦×‘. ×ž×™×™×¡×“ ×”×¤×•×“×§××¡×˜ "×ž×¡×¢ ×‘×™×Ÿ ×¨×¢×™×•× ×•×ª" ×•×›×•×ª×‘ ×‘× ×•×©××™ ×ž×“×™× ×™×•×ª ×•×‘×™×˜×—×•×Ÿ.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQFfjvKCgXOpCA/profile-displayphoto-crop_800_800/B4DZqtMsVTJIAI-/0/1763842378390?e=1776902400&v=beta&t=JTX9usExxXfL7QZE5o85vCpGgKO3rbpEZ5vOW8YlsY4'},
  {n:'×¢×•×–×™ ×§×œ×›×”×™×™×',r:'Client Solutions Manager, Meta Israel',loc:'×™×©×¨××œ',li:'https://www.linkedin.com/in/uzi-kalchaim-strategy/',em:'uzikal36@gmail.com',bs:'×¢×•×¨×š ×“×™×Ÿ ×•×›×œ×›×œ×Ÿ. ×œ×©×¢×‘×¨ ×™×•×¢×¥ ×œ×©×¨×™ ×”××•×¦×¨ ×•×”×‘×™×˜×—×•×Ÿ, ×•×¢×‘×“ ×’× ×‘×ª×—×•× ×§×¨× ×•×ª ×”×”×©×§×¢×”. ×›×™×•× Client Solutions Manager ×‘-Meta Israel.',ph:'https://media.licdn.com/dms/image/v2/D4E03AQHTFJJ_cDzsog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714136960312?e=1776902400&v=beta&t=eIbuXFpOCUw4ReLYaF7Oopvaq7_hMr9jXgTUxZP46eU'},
  {n:'×ž××™×” ×©×™×œ×•× ×™',r:'×¡×˜×•×“× ×˜×™×ª ×œ-Government and Economics, Harvard University',loc:'Harvard College',li:'https://www.linkedin.com/in/maya-shiloni-b40436252/',em:'maya_shiloni@college.harvard.edu',bs:'×¢×•×¡×§×ª ×‘×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª, ×ž×•×“×™×¢×™×Ÿ ×•×ž× ×”×™×’×•×ª ×¡×˜×•×“× ×˜×™××œ×™×ª. ×‘×•×’×¨×ª 8200 ×¢× × ×™×¡×™×•×Ÿ ×‘×–×™×¨×” ×”×¦×™×‘×•×¨×™×ª ×•×”×¤×¨×œ×ž× ×˜×¨×™×ª ×‘××¨×¦×•×ª ×”×‘×¨×™×ª ×•×‘×™×©×¨××œ.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQGl5wuZEaEcUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724958502441?e=1776902400&v=beta&t=F7QE2UcgUEbQaPXPcyfcJ5ltETs08wdMsADH3K6amg4'},
  {n:'×¢×ž×¨×™ ×¢×˜×¨',r:'Former Chief of Staff, Ministry of Diaspora Affairs | Global COO ELNET',loc:'×™×©×¨××œ',li:'https://www.linkedin.com/in/omriattar/',em:'Mail@omriattar.com',bs:'×¢×•×¡×§ ×‘×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª, ××¡×˜×¨×˜×’×™×” ×•×§×©×¨×™× ×‘×™× ×œ××•×ž×™×™×, ×¢× × ×™×¡×™×•×Ÿ ×‘×¢×‘×•×“×” ×ž×ž×©×œ×ª×™×ª ×•×‘×–×™×¨×” ×”×™×”×•×“×™×ª-×’×œ×•×‘×œ×™×ª.',bf:'×¢×ž×¨×™ ×¢×˜×¨ ×”×•× ×ž× ×”×œ ×‘×›×™×¨ ×•××™×© ×¦×™×‘×•×¨ ×‘×¢×œ × ×™×¡×™×•×Ÿ ×¨×‘ ×‘×¢×‘×•×“×” ×ž×ž×©×œ×ª×™×ª, ×‘×–×™×¨×” ×”×™×”×•×“×™×ª-×’×œ×•×‘×œ×™×ª ×•×‘×§×™×“×•× ×§×©×¨×™× ×‘×™×Ÿ ×™×©×¨××œ ×œ×§×”×™×œ×•×ª ×™×”×•×“×™×•×ª ×‘×¢×•×œ×. ×”×•× ×›×™×”×Ÿ ×›×¨××© ×ž×˜×” ×‘×ž×©×¨×“ ×”×ª×¤×•×¦×•×ª ×•×›-Global COO ×©×œ ELNET, ×•×¤×•×¢×œ ×‘×¦×•×ž×ª ×©×‘×™×Ÿ ××¡×˜×¨×˜×’×™×”, ×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª, ×”× ×”×’×” ×§×”×™×œ×ª×™×ª ×•×“×™×¤×œ×•×ž×˜×™×” ×¦×™×‘×•×¨×™×ª.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQEU0a7VOZ-3gQ/profile-displayphoto-scale_400_400/B4DZpr9mifGQAg-/0/1762747902523?e=1776902400&v=beta&t=udOOJ9ux9Jt_UHOIOg6K-vLyDni0bFlVzuK9JwbJfKI'},
  {n:'×©×’×™× ×©×¨×•×Ÿ',r:'×¢×•×¡×§ ×‘×ž×“×™× ×™×•×ª ×˜×›× ×•×œ×•×’×™×”, ×—×“×©× ×•×ª ×•×™×–×ž×•×ª',loc:'×™×©×¨××œ',li:'https://www.linkedin.com/in/sagie-sharon/',em:'Sagiesh.1998@gmail.com',bs:'×¤×•×¢×œ ×‘×ž×ž×©×§ ×©×‘×™×Ÿ ×—×™× ×•×š, ×˜×›× ×•×œ×•×’×™×” ×•×™×–×ž×•×ª, ×•×ž×ª×ž×§×“ ×‘×©××œ×•×ª ×©×œ ×ž×“×™× ×™×•×ª, ×ž×•×¡×“×•×ª ×¦×™×‘×•×¨ ×•×”×™×¢×¨×›×•×ª ×œ×¢×™×“×Ÿ ×˜×›× ×•×œ×•×’×™ ×ž×©×ª× ×”.',ph:'https://media.licdn.com/dms/image/v2/D4E03AQGjPyPR0c_KeA/profile-displayphoto-crop_800_800/B4EZo4HswLHgAI-/0/1761878134584?e=1776902400&v=beta&t=wfMGcLI0G4mcIjVZ7WPrN2RM6azUZ7io4k9FqgCE1n0'},
  {n:'×“× ×” ×’×™× ×–×‘×•×¨×’',r:'Deloitte ×™×©×¨××œ - ×ž×’×–×¨ ×¦×™×‘×•×¨×™',loc:'Columbia University',li:'https://www.linkedin.com/in/dana-ginzburg-507046164/',em:'',bs:'×‘× ×™×™×ª ×©×•×ª×¤×•×™×•×ª ×‘×™×Ÿ ×”×ž×’×–×¨ ×”×¦×™×‘×•×¨×™ ×œ×ž×’×–×¨ ×”×¤×¨×˜×™. ×¡×˜×•×“× ×˜×™×ª ×œ-MPA ×‘×ª×•×›× ×™×ª Global Leadership ×‘×§×•×œ×•×ž×‘×™×” ×¢× × ×™×¡×™×•×Ÿ ×‘×¤×¨×•×™×§×˜×™× ×œ××•×ž×™×™× ×•×‘×”×•×‘×œ×ª ×ª×”×œ×™×›×™× ×‘×ž×’×–×¨ ×”×¦×™×‘×•×¨×™.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQHa5xHeAiLG3w/profile-displayphoto-shrink_800_800/B4DZPhzF0CGoAc-/0/1734660088148?e=1777507200&v=beta&t=skIIL4FMJDHWOLFXcN9oXMSo0SHX-9tajJFWBCzqViQ'},
  {n:'×œ×™×‘×™ ××œ×•×Ÿ',r:'×©×œ×™×—×ª ×¢×¨×•×¥ 14 ×œ×‘×™×ª ×”×œ×‘×Ÿ',loc:'××¨×¦×•×ª ×”×‘×¨×™×ª',li:'https://www.linkedin.com/in/libby-blanca-alon-3314a21a0/',em:'',bs:'×¢×™×ª×•× ××™×ª ×”×ž×¡×§×¨×ª ××ª ×”×¤×•×œ×™×˜×™×§×” ×”××ž×¨×™×§××™×ª, ×”×‘×™×ª ×”×œ×‘×Ÿ ×•×™×—×¡×™ ××¨×”×´×‘â€“×™×©×¨××œ. ×œ×©×¢×‘×¨ ×¨××© ×“×¡×§ ×”×—×•×¥ ×‘×¢×¨×•×¥ 14 ×•×ž×¤×™×§×ª ×“×¡×§ ×”×—×•×¥ ×‘×¢×¨×•×¥ 13.',ph:'https://media.licdn.com/dms/image/v2/D4D03AQEIngi_BTKeQA/profile-displayphoto-crop_800_800/B4DZnBuTo9GgAI-/0/1759891767800?e=1777507200&v=beta&t=CdACjxAJ4S_2R0N8GN0Qqlb3mlm8TNf1Z4mRszs3YgI'}
];

var PROFILE_OVERRIDES={
  'Aaron Simpson-Grossman':{
    n:'××”×¨×Ÿ ×¡×™×ž×¤×¡×•×Ÿ-×’×¨×•×¡×ž×Ÿ',
    r:'×§×¦×™×Ÿ ×ž×©×¤×˜×™ ×‘-IDF ×•×ž×•×¢×ž×“ ×œ-Wharton MBA',
    loc:'×ª×œ ××‘×™×‘ -> ×¤×™×œ×“×œ×¤×™×”',
    hd:'×ž×©×¤×˜×Ÿ ×•×§×¦×™×Ÿ ×‘×¢×œ × ×™×¡×™×•×Ÿ ×‘×–×™×¨×” ×”×‘×™×˜×—×•× ×™×ª ×•×”×‘×™× ×œ××•×ž×™×ª',
    bs:'×©×™×¨×ª ×›×—×ž×© ×©× ×™× ×›×§×¦×™×Ÿ ×•×›×ž×©×¤×˜×Ÿ ×‘×¤×¨×§×œ×™×˜×•×ª ×”×¦×‘××™×ª, ×•×”×™×” ×©×•×ª×£ ×œ×¢×™×¦×•×‘ ×”××¡×˜×¨×˜×’×™×” ×”×ž×©×¤×˜×™×ª ×©×œ ×™×©×¨××œ ×‘×–×™×¨×” ×”×‘×™× ×œ××•×ž×™×ª.',
    bf:'××¨×•×Ÿ ×¡×™×ž×¤×¡×•×Ÿ-×’×¨×•×¡×ž×Ÿ ×©×™×¨×ª ×›×—×ž×© ×©× ×™× ×›×§×¦×™×Ÿ ×•×›×ž×©×¤×˜×Ÿ ×‘×¤×¨×§×œ×™×˜×•×ª ×”×¦×‘××™×ª, ×•×”×™×” ×©×•×ª×£ ×œ×¢×™×¦×•×‘ ×”××¡×˜×¨×˜×’×™×” ×”×ž×©×¤×˜×™×ª ×©×œ ×™×©×¨××œ ×‘×–×™×¨×” ×”×‘×™× ×œ××•×ž×™×ª. ×”×•× ×‘×¢×œ ×ª××¨×™× ×‘×ž×©×¤×˜×™×, ×›×œ×›×œ×” ×•×ž×™×ž×•×Ÿ, ×•×¦×¤×•×™ ×œ×”×ª×—×™×œ MBA ×‘-Wharton. ×ª×—×•×ž×™ ×”×¢× ×™×™×Ÿ ×©×œ×• ×›×•×œ×œ×™× ×”×©×§×¢×•×ª, ×˜×›× ×•×œ×•×’×™×•×ª ×“×•-×©×™×ž×•×©×™×•×ª ×•×ª×©×ª×™×•×ª.',
    hl:['×©×™×¨×ª ×›×§×¦×™×Ÿ ×•×›×ž×©×¤×˜×Ÿ ×‘×¤×¨×§×œ×™×˜×•×ª ×”×¦×‘××™×ª ×‘×ž×©×š ×›×—×ž×© ×©× ×™×','×”×™×” ×©×•×ª×£ ×œ×¢×™×¦×•×‘ ×”××¡×˜×¨×˜×’×™×” ×”×ž×©×¤×˜×™×ª ×©×œ ×™×©×¨××œ ×‘×–×™×¨×” ×”×‘×™× ×œ××•×ž×™×ª','×‘×¢×œ ×¨×§×¢ ×ž×©×•×œ×‘ ×‘×ž×©×¤×˜×™×, ×›×œ×›×œ×” ×•×ž×™×ž×•×Ÿ']
  },
  'Maya Shiloni':{
    r:'×¡×˜×•×“× ×˜×™×ª ×œ-Government and Economics, Harvard University',
    loc:'Harvard College',
    em:'maya_shiloni@college.harvard.edu',
    hd:'×¢×•×¡×§×ª ×‘×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª, ×ž×•×“×™×¢×™×Ÿ ×•×ž× ×”×™×’×•×ª ×¡×˜×•×“× ×˜×™××œ×™×ª',
    bs:'×¡×˜×•×“× ×˜×™×ª ×‘-Harvard University ×œ×ª×—×•×ž×™ Government and Economics ×•×‘×•×’×¨×ª ×™×—×™×“×ª 8200. ×¦×‘×¨×” × ×™×¡×™×•×Ÿ ×‘×ž×•×“×™×¢×™×Ÿ, ×‘× ×™×”×•×œ ×ž×•×¦×¨ ×•×‘×¢×©×™×™×” ×¦×™×‘×•×¨×™×ª ×‘××¨×¦×•×ª ×”×‘×¨×™×ª ×•×‘×™×©×¨××œ.',
    bf:'×ž××™×” ×©×™×œ×•× ×™ ×”×™× ×¡×˜×•×“× ×˜×™×ª ×‘-Harvard University ×œ×ª×—×•×ž×™ Government and Economics ×•×‘×•×’×¨×ª ×™×—×™×“×ª 8200, ×©× ×©×™×¨×ª×” ×‘× ×™×”×•×œ ×¤×¨×•×™×§×˜×™× ×•×‘× ×™×”×•×œ ×ž×•×¦×¨. ×‘×”×ž×©×š ×¦×‘×¨×” × ×™×¡×™×•×Ÿ ×’× ×‘×–×™×¨×” ×”×¦×™×‘×•×¨×™×ª ×•×”×¤×¨×œ×ž× ×˜×¨×™×ª, ×›×•×œ×œ ×”×ª×ž×—×•×ª ××¦×œ ×—×‘×¨ ×”×§×•× ×’×¨×¡ Josh Gottheimer ×•×¢×‘×•×“×” ×‘×›× ×¡×ª ×™×©×¨××œ. ×œ×¦×“ ×–××ª ×”×•×‘×™×œ×” ×™×•×–×ž×•×ª ×¡×˜×•×“× ×˜×™××œ×™×•×ª ×ž×©×ž×¢×•×ª×™×•×ª, ×•×‘×”×Ÿ Harvard College Israel Trek ×•×”-International Israel Summit. ×ª×—×•×ž×™ ×”×¢× ×™×™×Ÿ ×©×œ×” ×›×•×œ×œ×™× ×ž×©×¤×˜, ×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª ×•×¤×•×œ×™×˜×™×§×” ×™×©×¨××œ×™×ª.',
    hl:['×‘×•×’×¨×ª ×™×—×™×“×ª 8200 ×¢× × ×™×¡×™×•×Ÿ ×‘×ž×•×“×™×¢×™×Ÿ ×•×‘× ×™×”×•×œ ×ž×•×¦×¨','×¦×‘×¨×” × ×™×¡×™×•×Ÿ ×‘×–×™×¨×” ×”×¦×™×‘×•×¨×™×ª ×•×”×¤×¨×œ×ž× ×˜×¨×™×ª ×‘××¨×¦×•×ª ×”×‘×¨×™×ª ×•×‘×™×©×¨××œ','×”×•×‘×™×œ×” ×™×•×–×ž×•×ª ×¡×˜×•×“× ×˜×™××œ×™×•×ª ×ž×¨×›×–×™×•×ª ×‘-Harvard ×•×‘×§×”×™×œ×” ×”×™×©×¨××œ×™×ª']
  },
  '×ž××™×” ×©×™×œ×•× ×™':{
    n:'×ž××™×” ×©×™×œ×•× ×™',
    em:'maya_shiloni@college.harvard.edu'
  },
  'Sagie Sharon':{
    n:'×©×’×™× ×©×¨×•×Ÿ',
    r:'×¢×•×¡×§ ×‘×ž×“×™× ×™×•×ª ×˜×›× ×•×œ×•×’×™×”, ×—×“×©× ×•×ª ×•×™×–×ž×•×ª',
    loc:'×™×©×¨××œ',
    em:'Sagiesh.1998@gmail.com',
    bs:'×¤×•×¢×œ ×‘×ž×ž×©×§ ×©×‘×™×Ÿ ×—×™× ×•×š, ×˜×›× ×•×œ×•×’×™×” ×•×™×–×ž×•×ª, ×•×ž×ª×ž×§×“ ×‘×©××œ×•×ª ×©×œ ×ž×“×™× ×™×•×ª, ×ž×•×¡×“×•×ª ×¦×™×‘×•×¨ ×•×”×™×¢×¨×›×•×ª ×œ×¢×™×“×Ÿ ×˜×›× ×•×œ×•×’×™ ×ž×©×ª× ×”.',
    bf:'×©×’×™× ×©×¨×•×Ÿ ×¤×•×¢×œ ×‘×ž×ž×©×§ ×©×‘×™×Ÿ ×—×™× ×•×š, ×˜×›× ×•×œ×•×’×™×” ×•×™×–×ž×•×ª, ×•×ž×ª×ž×§×“ ×‘××•×¤×Ÿ ×©×‘×• ×ž×¢×¨×›×•×ª ×¦×™×‘×•×¨×™×•×ª ×•×ž×•×¡×“×•×ª ×—×™× ×•×š × ×¢×¨×›×™× ×œ×¢×™×“×Ÿ ×˜×›× ×•×œ×•×’×™ ×ž×©×ª× ×”. ×”×¨×§×¢ ×©×œ×• ×ž×©×œ×‘ ×¢×©×™×™×” ×—×‘×¨×ª×™×ª, ×™×•×–×ž×•×ª ×—×™× ×•×›×™×•×ª ×•×¢×‘×•×“×” ×¡×‘×™×‘ ×ª×”×œ×™×›×™ ×©×™× ×•×™ ×•×—×“×©× ×•×ª.'
  },
  'Omri Attar':{
    n:'×¢×ž×¨×™ ×¢×˜×¨',
    em:'Mail@omriattar.com',
    bf:'×¢×ž×¨×™ ×¢×˜×¨ ×”×•× ×ž× ×”×œ ×‘×›×™×¨ ×•××™×© ×¦×™×‘×•×¨ ×‘×¢×œ × ×™×¡×™×•×Ÿ ×¨×‘ ×‘×¢×‘×•×“×” ×ž×ž×©×œ×ª×™×ª, ×‘×–×™×¨×” ×”×™×”×•×“×™×ª-×’×œ×•×‘×œ×™×ª ×•×‘×§×™×“×•× ×§×©×¨×™× ×‘×™×Ÿ ×™×©×¨××œ ×œ×§×”×™×œ×•×ª ×™×”×•×“×™×•×ª ×‘×¢×•×œ×. ×”×•× ×›×™×”×Ÿ ×›×¨××© ×ž×˜×” ×‘×ž×©×¨×“ ×”×ª×¤×•×¦×•×ª ×•×›-Global COO ×©×œ ELNET, ×•×¤×•×¢×œ ×‘×¦×•×ž×ª ×©×‘×™×Ÿ ××¡×˜×¨×˜×’×™×”, ×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª, ×”× ×”×’×” ×§×”×™×œ×ª×™×ª ×•×“×™×¤×œ×•×ž×˜×™×” ×¦×™×‘×•×¨×™×ª.'
  },
  'Ofir Cohen':{
    n:'××•×¤×™×¨ ×›×”×Ÿ',
    r:'×ž×•×¢×ž×“ ×œ-MPA, Princeton University',
    loc:'Princeton, NJ',
    hd:'×™×•×¢×¥ ×œ×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª, ×—×“×©× ×•×ª ×•×˜×›× ×•×œ×•×’×™×”',
    bs:'×ž×•×¢×ž×“ ×œ-MPA ×‘-Princeton University, ×”×ž×ª×ž×§×“ ×‘×ž×“×™× ×™×•×ª AI, ×—×“×©× ×•×ª ×•×ª×—×¨×•×ª×™×•×ª ×›×œ×›×œ×™×ª. ×œ×©×¢×‘×¨ ×™×•×¢×¥ ×‘×‘×™×ª ×”× ×‘×—×¨×™× ×”××ž×¨×™×§××™ ×•×¨××© ×ž×˜×” ×‘-DNAidea.',
    bf:'××•×¤×™×¨ ×›×”×Ÿ ×”×•× ×ž×•×¢×ž×“ ×œ-MPA ×‘-Princeton University, ×¢× ×”×ª×ž×§×“×•×ª ×‘×ž×“×™× ×™×•×ª ×˜×›× ×•×œ×•×’×™×”, AI, ×—×“×©× ×•×ª ×•×ª×—×¨×•×ª×™×•×ª ×›×œ×›×œ×™×ª. ×‘×¢×‘×¨ ×©×™×ž×© ×™×•×¢×¥ ×‘×‘×™×ª ×”× ×‘×—×¨×™× ×”××ž×¨×™×§××™ ×‘×ª×—×•×ž×™ ×—×•×¥ ×•×›×œ×›×œ×”, ×•×‘×”×ž×©×š ×›×™×”×Ÿ ×›×¨××© ×ž×˜×” ×‘-DNAidea. ×¤×•×¢×œ ×‘×¦×•×ž×ª ×©×‘×™×Ÿ ×ž×“×™× ×™×•×ª ×¦×™×‘×•×¨×™×ª, ×©×•×ª×¤×•×™×•×ª ×‘×™×Ÿ-×ž×’×–×¨×™×•×ª ×•×—×“×©× ×•×ª, ×•×ž×ª×¢× ×™×™×Ÿ ×‘×ž×™×•×—×“ ×‘×‘× ×™×™×ª ×’×©×¨×™× ×‘×™×Ÿ ×ž×ž×©×œ, ×¤×™×œ× ×ª×¨×•×¤×™×” ×•×”×ž×’×–×¨ ×”×¤×¨×˜×™ ×¡×‘×™×‘ ×˜×›× ×•×œ×•×’×™×•×ª ×ž×ª×¤×ª×—×•×ª.',
    hl:['×©×™×ž×© ×™×•×¢×¥ ×‘×‘×™×ª ×”× ×‘×—×¨×™× ×”××ž×¨×™×§××™ ×‘×ª×—×•×ž×™ ×—×•×¥ ×•×›×œ×›×œ×”','×›×™×”×Ÿ ×›×¨××© ×ž×˜×” ×‘-DNAidea ×•×”×•×‘×™×œ ×¢×‘×•×“×” ××¡×˜×¨×˜×’×™×ª ×¨×‘-×ž×’×–×¨×™×ª','×ž×ª×ž×§×“ ×‘×ž×“×™× ×™×•×ª ×˜×›× ×•×œ×•×’×™×”, AI ×•×—×“×©× ×•×ª ×‘×–×™×¨×” ×”×¦×™×‘×•×¨×™×ª']
  },
  'Uzi Kalchaim':{
    r:'Client Solutions Manager, Meta Israel',
    loc:'×™×©×¨××œ',
    bs:'×¢×•×¨×š ×“×™×Ÿ ×•×›×œ×›×œ×Ÿ. ×œ×©×¢×‘×¨ ×™×•×¢×¥ ×œ×©×¨×™ ×”××•×¦×¨ ×•×”×‘×™×˜×—×•×Ÿ, ×•×¢×‘×“ ×’× ×‘×ª×—×•× ×§×¨× ×•×ª ×”×”×©×§×¢×”. ×›×™×•× ×¤×•×¢×œ ×‘-Meta Israel ×‘×¦×•×•×ª Media & Aggregators.',
    bf:'×¢×•×–×™ ×›×œ×—×™×™× ×”×•× ×¢×•×¨×š ×“×™×Ÿ ×•×›×œ×›×œ×Ÿ, ×¢× ×¨×§×¢ ×‘×¢×‘×•×“×” ×¦×™×‘×•×¨×™×ª, ×‘×™×™×¢×•×¥ ×œ×ž×“×™× ×™×•×ª ×›×œ×›×œ×™×ª ×•×‘×ª×—×•× ×”×”×©×§×¢×•×ª. ×‘×¢×‘×¨ ×©×™×ž×© ×™×•×¢×¥ ×œ×©×¨×™ ×”××•×¦×¨ ×•×”×‘×™×˜×—×•×Ÿ, ×•×›×Ÿ ×¢×¡×§ ×‘×§×¨× ×•×ª ×”×©×§×¢×” ×•×‘-Private Equity. ×›×™×•× ×¤×•×¢×œ ×‘-Meta Israel ×›-Client Solutions Manager ×‘×¦×•×•×ª Media & Aggregators.'
  }
};

function applyProfileOverrides(m){
  var o=PROFILE_OVERRIDES[m.n]
    ||(memberId(m)==='maya'?PROFILE_OVERRIDES['Maya Shiloni']:null)
    ||(/ofir-cohen-innovation/.test(m.li||'')?PROFILE_OVERRIDES['Ofir Cohen']:null)
    ||(/omriattar/.test(m.li||'')?PROFILE_OVERRIDES['Omri Attar']:null)
    ||(/aaron-s-g/.test(m.li||'')?PROFILE_OVERRIDES['Aaron Simpson-Grossman']:null)
    ||(/sagie-sharon/.test(m.li||'')?PROFILE_OVERRIDES['Sagie Sharon']:null)
    ||(/uzi-kalchaim-strategy/.test(m.li||'')?PROFILE_OVERRIDES['Uzi Kalchaim']:null);
  if(!o)return m;
  Object.keys(o).forEach(function(k){m[k]=o[k]});
  return m;
}

function clr(n){var h=0;for(var i=0;i<n.length;i++)h=((h<<5)-h)+n.charCodeAt(i);return CL[Math.abs(h)%CL.length]}
function ini(n){var p=n.trim().split(/\s+/);return p.length===1?p[0][0].toUpperCase():(p[0][0]+p[p.length-1][0]).toUpperCase()}
function e(s){return(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function oneLine(s){return(s||'').replace(/\s+/g,' ').trim()}
function normalizeSearchText(s){
  return oneLine(s).toLowerCase().replace(/[â€œâ€"'.:,;()\-_/]/g,' ').replace(/\s+/g,' ').trim();
}
function isCorruptedText(value){
  var text=oneLine(value||'');
  if(!text)return false;
  if(/[Ã—Ãƒï¿½Â¤â„¢Å“Å¾Ëœâ€º]/.test(text))return true;
  if(/[Ã¢][â‚¬â€â€ ]/.test(text))return true;
  if(/\?{3,}/.test(text))return true;
  return false;
}
function cleanLiveText(value){
  var text=oneLine(value||'');
  return isCorruptedText(text)?'':text;
}
function cleanLiveHighlights(value){
  return parseHighlightsField(value).filter(function(item){
    return !isCorruptedText(item);
  });
}
function sanitizeIncomingMember(m){
  if(!m)return null;
  var li=normalizeLinkedInUrl(m.li,m.n);
  var cleaned={
    n:cleanLiveText(m.n),
    r:cleanLiveText(m.r),
    loc:formatLocation(cleanLiveText(m.loc),cleanLiveText(m.loc2)),
    loc2:cleanLiveText(m.loc2),
    hd:cleanLiveText(m.hd||m.headline||''),
    sd:cleanLiveText(m.sd||m.sub||m.subtitle||''),
    hl:cleanLiveHighlights(m.hl||m.bullets||m.highlights||''),
    li:li,
    em:isValidEmail(m.em||'')?oneLine(m.em):'',
    bs:cleanLiveText(m.bs),
    bf:cleanLiveText(m.bf),
    ph:normImg(m.ph||'')
  };
  if(!cleaned.n)return null;
  return cleaned;
}
function isValidEmail(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(oneLine(value||''));
}
function normalizeLinkedInUrl(li,name){
  var raw=oneLine(li||'');
  var person=oneLine(name||'');
  if(!raw)return '';
  if(/linkedin\.com/i.test(raw)){
    return /^https?:\/\//i.test(raw) ? raw : 'https://'+raw.replace(/^\/+/,'');
  }
  if(/^https?:\/\//i.test(raw)){
    if(/\s/.test(raw) || !/\.[a-z]{2,}/i.test(raw)){
      return person ? 'https://www.linkedin.com/search/results/all/?keywords='+encodeURIComponent(person) : '';
    }
    return raw;
  }
  if(/\s/.test(raw) || raw.indexOf('.')<0){
    return person ? 'https://www.linkedin.com/search/results/all/?keywords='+encodeURIComponent(person) : '';
  }
  return 'https://'+raw;
}
function preview(s,n){
  s=oneLine(s);
  if(!s)return '';
  if(s.length<=n)return s;
  var cut=s.slice(0,n);
  var last=cut.lastIndexOf(' ');
  if(last>60)cut=cut.slice(0,last);
  return cut+'...';
}
function membersLabel(n){return n+' ×—×‘×¨×™×'}
function formatLocation(primary,specific){
  var main=oneLine(primary||'').replace(/\s*\([^)]*\)\s*$/,'').trim();
  var detail=oneLine(specific||'');
  if(!main)return detail;
  return detail ? main+' ('+detail+')' : main;
}
function locationRegion(m){
  return oneLine((m&&m.loc)||'').replace(/\s*\([^)]*\)\s*$/,'').trim();
}
function getRegionFilters(){
  return Array.from(new Set(MEMBERS.map(locationRegion).filter(Boolean))).sort(function(a,b){return a.localeCompare(b,'en');});
}
function getCacheKey(){return 'nextgen_forum_members_cache_v6'}
function saveMembersCache(){
  try{localStorage.setItem(getCacheKey(),JSON.stringify(MEMBERS));}catch(e){}
}
function loadMembersCache(){
  try{
    var raw=localStorage.getItem(getCacheKey());
    if(!raw)return [];
    var parsed=JSON.parse(raw);
    return Array.isArray(parsed)?parsed.map(sanitizeIncomingMember).filter(Boolean):[];
  }catch(e){return []}
}
function getMemberCorpus(m){return normalizeSearchText([m.n,m.r,m.loc,m.bs,m.bf,m.em].join(' '))}
function mergeIntoMembers(list){
  (list||[]).forEach(function(fm){
    var found=MEMBERS.find(function(m){return sameMember(m,fm)});
    if(found)mergeMemberData(found,fm);
    else MEMBERS.push(fm);
  });
  dedupeMembers();
}
function withRetries(fn,tries,delay){
  tries=Math.max(1,tries||1);
  delay=delay||1200;
  return fn().catch(function(err){
    if(tries<=1)throw err;
    return new Promise(function(resolve){setTimeout(resolve,delay);})
      .then(function(){return withRetries(fn,tries-1,delay);});
  });
}
function getMemberTopics(m){
  var corpus=getMemberCorpus(m),hits=[];
  TOPIC_RULES.forEach(function(t){
    if(t.terms.some(function(term){return corpus.indexOf(normalizeSearchText(term))>=0;}))hits.push(t.label);
  });
  var region=locationRegion(m);
  if(region)hits.push(region);
  return Array.from(new Set(hits));
}
function getSearchTokens(q){
  q=normalizeSearchText(q);
  if(!q)return [];
  var tokens=[q];
  TOPIC_RULES.forEach(function(t){
    if(t.label===q||t.terms.some(function(term){return normalizeSearchText(term)===q;})){
      tokens=tokens.concat(t.terms.map(normalizeSearchText));
      tokens.push(normalizeSearchText(t.label));
    }
  });
  return Array.from(new Set(tokens.filter(Boolean)));
}
function parseHighlightsField(value){
  if(Array.isArray(value))return value.filter(Boolean).slice(0,3);
  return String(value||'')
    .split(/\r?\n|\u2022|â€¢|;+/g)
    .map(function(p){return cleanProfessionalText(p);})
    .filter(Boolean)
    .slice(0,3);
}
function truncateClean(s,n){
  s=oneLine(s);
  if(!s)return '';
  if(s.length<=n)return s;
  var cut=s.slice(0,n);
  var last=cut.lastIndexOf(' ');
  if(last>40)cut=cut.slice(0,last);
  return cut.trim();
}
function splitBioParts(text){
  return oneLine(text)
    .replace(/->|â†’|â€”|â€“/g,'. ')
    .replace(/,\s+/g,'. ')
    .split(/[.!?;]+/g)
    .map(function(p){return p.trim();})
    .filter(Boolean);
}
function cleanProfessionalText(text){
  return oneLine((text||'')
    .replace(/^([A-Za-z\u0590-\u05FF' -]+)\s+(×”×•×|×”×™×)\s+/,'')
    .replace(/\b(×›×™×•×|×•×¢×›×©×™×•|currently|now)\b/ig,'')
    .replace(/\s+/g,' ')
    .trim());
}
function getHighlights(m){
  var manual=parseHighlightsField(m.hl);
  if(manual.length)return manual;
  if(m.hd||m.sd||(Array.isArray(m.hl)?m.hl.length:String(m.hl||'').trim()))return [];
  var seen={};
  return splitBioParts(m.bf||m.bs||'')
    .map(cleanProfessionalText)
    .filter(function(p){
      var key=p.toLowerCase();
      if(!p||p.length<18||seen[key])return false;
      seen[key]=true;
      return !/(^×× ×™\b| ×ž×ª×¢× ×™×™×Ÿ\b| interested\b| enjoys\b| plans\b| ×¦×¤×•×™ ×œ×”×ª×—×™×œ\b| currently\b)/i.test(p);
    })
    .slice(0,3);
}
function professionalHeadline(m){
  if(m.hd)return oneLine(m.hd);
  if(m.sd||(Array.isArray(m.hl)?m.hl.length:String(m.hl||'').trim()))return '';
  var role=oneLine(m.r||'')
    .replace(/\b(University|College|candidate|student|incoming)\b.*$/i,'')
    .replace(/\b(MPA|MPP|MPM|MBA|MSc|MA|BA|LLB|PhD)\b.*$/i,'')
    .replace(/\b(×ž×•×¢×ž×“|×ž×•×¢×ž×“×ª|×¡×˜×•×“× ×˜|×¡×˜×•×“× ×˜×™×ª)\b.*$/i,'')
    .replace(/^×ž×•×¢×ž×“(?:×ª)? ×œ-[^,]+,\s*/,'')
    .replace(/^×¡×˜×•×“× ×˜(?:×™×ª)? ×œ-[^,]+,\s*/,'')
    .replace(/^[,.\-â€“â€”\s]+|[,.\-â€“â€”\s]+$/g,'')
    .trim();
  if(role&&role.length<=70)return role;
  var first=getHighlights(m)[0]||'';
  return truncateClean(first||role||'×—×‘×¨/×ª ×‘×¤×•×¨×•×',70);
}
function professionalSubtitle(m){
  if(m.sd)return truncateClean(m.sd,95);
  if(m.hd||(Array.isArray(m.hl)?m.hl.length:String(m.hl||'').trim()))return '';
  var role=oneLine(m.r||'');
  if(role&&role!==professionalHeadline(m))return truncateClean(role,95);
  return '';
}
function displayLocation(m){
  return oneLine(m.loc||'');
}
function renderHighlights(m,limit){
  var points=getHighlights(m);
  if(typeof limit==='number')points=points.slice(0,limit);
  if(!points.length)return '';
  return '<ul class="card-points">'+points.map(function(p){return '<li>'+e(truncateClean(p,120))+'</li>'}).join('')+'</ul>';
}
function getPreviewBulletCount(m){
  var points=getHighlights(m);
  if(points.length<=1)return points.length;
  var total=0,count=0;
  for(var i=0;i<Math.min(points.length,3);i++){
    total+=oneLine(points[i]).length;
    count++;
    if(count>=3)break;
    if(total>130)return Math.max(1,count);
  }
  return Math.min(3,count);
}
function getExpandedDetail(m){
  var points=getHighlights(m);
  var previewCount=getPreviewBulletCount(m);
  var pointsText=oneLine(points.join('. '));
  var headlineText=normalizeSearchText(professionalHeadline(m));
  var subtitleText=normalizeSearchText(professionalSubtitle(m));
  var pointsNorm=normalizeSearchText(pointsText);
  var candidates=[oneLine(m.bf||''),oneLine(m.bs||''),oneLine(m.r||'')].filter(Boolean);
  var detailed=candidates.find(function(text){
    var norm=normalizeSearchText(text);
    return norm&&norm!==pointsNorm&&norm!==headlineText&&norm!==subtitleText&&text.length>=45;
  })||'';
  if(detailed){
    return {hasMore:true,html:'<div class="bio-full-text">'+e(detailed)+'</div>'};
  }
  if(points.length>previewCount){
    return {hasMore:true,html:renderHighlights(m)};
  }
  return {hasMore:false,html:''};
}
function memberId(m){
  var li=(m.li||'').toLowerCase();
  if(li.indexOf('ofir-cohen-innovation')>=0)return 'ofir';
  if(li.indexOf('maya-shiloni')>=0)return 'maya';
  if(li.indexOf('omri')>=0)return 'omri';
  if(li.indexOf('dana-ginzburg')>=0)return 'dana';
  if(li.indexOf('aaron-s-g')>=0)return 'aaron';
  if(li.indexOf('sagie-sharon')>=0)return 'sagie';
  var n=normalizeSearchText(m.n||'');
  if(n.indexOf('omri')>=0||n.indexOf('×¢×ž×¨×™')>=0)return 'omri';
  if(n.indexOf('maya shiloni')>=0)return 'maya';
  if(n.indexOf('dana ginzburg')>=0||n.indexOf('×“× ×” ×’×™× ×–×‘×•×¨×’')>=0)return 'dana';
  if(n.indexOf('ofir cohen')>=0)return 'ofir';
  if(n.indexOf('aaron simpson grossman')>=0)return 'aaron';
  if(n.indexOf('sagie sharon')>=0)return 'sagie';
  return normalizeSearchText(m.n||'');
}
function isSteeringMember(m){
  var id=memberId(m);
  return id==='ofir'||id==='maya'||id==='omri'||id==='dana';
}
function surnameSortKey(m){
  var n=oneLine((m&&m.n)||'').trim();
  if(!n)return '';
  var parts=n.split(/\s+/).filter(Boolean);
  var surname=(parts.length>1?parts.slice(1).join(' '):parts[0])||n;
  return normalizeSearchText(surname+' '+n);
}
function sameMember(a,b){
  if(!a||!b)return false;
  var ali=(a.li||'').toLowerCase().trim();
  var bli=(b.li||'').toLowerCase().trim();
  if(ali&&bli&&ali===bli)return true;
  return memberId(a)===memberId(b);
}
function mergeMemberData(target,src){
  if(src.ph)target.ph=src.ph;
  if(src.n&&!isCorruptedText(src.n))target.n=src.n;
  if(src.hd&&!isCorruptedText(src.hd))target.hd=src.hd;
  if(src.sd&&!isCorruptedText(src.sd))target.sd=src.sd;
  if(src.hl&&cleanLiveHighlights(src.hl).length)target.hl=cleanLiveHighlights(src.hl);
  if(src.bf&&!isCorruptedText(src.bf)&&oneLine(src.bf)!==oneLine(target.bs||''))target.bf=src.bf;
  if((!target.bs||isCorruptedText(target.bs))&&src.bs&&!isCorruptedText(src.bs))target.bs=src.bs;
  if((!target.r||isCorruptedText(target.r))&&src.r&&!isCorruptedText(src.r))target.r=src.r;
  if((!target.loc||isCorruptedText(target.loc))&&src.loc&&!isCorruptedText(src.loc))target.loc=src.loc;
  if((!target.li||!normalizeLinkedInUrl(target.li,target.n))&&src.li)target.li=normalizeLinkedInUrl(src.li,src.n||target.n);
  if((!target.em||!isValidEmail(target.em))&&isValidEmail(src.em))target.em=src.em;
}
function dedupeMembers(){
  var merged=[];
  MEMBERS.forEach(function(m){
    var found=merged.find(function(x){return sameMember(x,m)});
    if(found)mergeMemberData(found,m);
    else merged.push(m);
  });
  MEMBERS=merged
    .filter(function(m){return m&&m.n&&!isCorruptedText(m.n);})
    .map(applyProfileOverrides);
}

var LI='<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>';
var MI='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>';
var LO='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>';
var DN='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>';
var UP='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>';

function card(m){
  var bg=clr(m.n);
  var previewCount=getPreviewBulletCount(m);
  var expanded=getExpandedDetail(m);
  var subtitle=professionalSubtitle(m);
  var loc=displayLocation(m);
  var topics=getMemberTopics(m);
  var corpus=getMemberCorpus(m)+' '+topics.map(normalizeSearchText).join(' ');
  var av=m.ph
    ?'<img src="'+e(m.ph)+'" alt="'+e(m.n)+'" referrerpolicy="no-referrer" loading="eager" decoding="async" onload="this.parentNode.style.background=\'transparent\'" onerror="this.remove();this.parentNode.style.background=\''+bg+'\'">'
    :ini(m.n);
  var email=isValidEmail(m.em||'')?(m.em||'').trim():'';
  var safe=email.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
  var li=m.li?'<a class="btn-li" href="'+e(m.li)+'" target="_blank" rel="noopener">'+LI+'LinkedIn</a>':'';
  var em=email?'<button class="btn-em" onclick="rev(this,\''+safe+'\')">'+MI+'<span>×”×¦×’ ×ž×™×™×œ</span></button>':'';
  return '<div class="card" data-s="'+e(corpus)+'" data-topics="'+e(topics.join('|'))+'">'
    +'<div class="card-top">'
      +'<div class="avatar" style="background:'+(m.ph?'#d0cdc5':bg)+'">'+av+'</div>'
      +'<div class="card-identity">'
        +'<div class="card-name">'+e(m.n)+'</div>'
        +'<div class="card-role">'+e(professionalHeadline(m))+'</div>'
        +(subtitle?'<div class="card-subtitle">'+e(subtitle)+'</div>':'')
        +(loc?'<div class="card-loc">'+LO+'<span>'+e(loc)+'</span></div>':'')
      +'</div>'
    +'</div>'
    +'<div class="card-bio">'
      +'<div class="bio-short">'+renderHighlights(m,previewCount)+'</div>'
      +(expanded.hasMore?'<div class="bio-full">'+expanded.html+'</div>':'')
      +(expanded.hasMore?'<button class="bio-toggle" onclick="tgl(this)">×§×¨× ×¢×•×“ '+DN+'</button>':'')
    +'</div>'
    +(li||em?'<div class="card-footer">'+li+em+'</div>':'')
  +'</div>'
}

function rev(btn,em){
  if(btn.classList.contains('on')){if(navigator.clipboard)navigator.clipboard.writeText(em);return}
  btn.classList.add('on');btn.querySelector('span').textContent=em;btn.title='×œ×—×™×¦×” ×ª×¢×ª×™×§ ××ª ×”×›×ª×•×‘×ª'
}
function tgl(btn){
  var cardEl=btn.closest('.card'),bio=btn.closest('.card-bio'),s=bio.querySelector('.bio-short'),f=bio.querySelector('.bio-full');
  if(!f)return;
  var expanding=f.style.display!=='block';
  if(cardEl)cardEl.classList.toggle('expanded',expanding);
  s.style.display=expanding?'none':'-webkit-box';
  f.style.display=expanding?'block':'none';
  btn.innerHTML=expanding?'×§×¨× ×¤×—×•×ª '+UP:'×§×¨× ×¢×•×“ '+DN
}
function cardMatches(c,q){
  if(!q)return true;
  var hay=normalizeSearchText(c.dataset.s||'');
  var tokens=getSearchTokens(q);
  return tokens.some(function(token){return hay.indexOf(token)>=0;});
}
function flt(){
  var q=document.getElementById('q').value;
  document.querySelectorAll('.card').forEach(function(c){
    var topicOk=!ACTIVE_TOPIC||(c.dataset.topics||'').split('|').includes(ACTIVE_TOPIC);
    var queryOk=cardMatches(c,q);
    c.style.display=(topicOk&&queryOk)?'':'none'
  });
  var vis=document.querySelectorAll('.card:not([style*="none"])').length;
  var steeringSection=document.getElementById('steeringSection');
  var visibleSteering=document.querySelectorAll('#steeringGrid .card:not([style*="none"])').length;
  if(steeringSection)steeringSection.style.display=visibleSteering?'':'none';
  var cnt=document.getElementById('cnt');
  if(cnt)cnt.textContent=membersLabel(vis)
}

function renderTopicBar(){
  var bar=document.getElementById('topicBar');
  if(!bar)return;
  if(!MEMBERS.length){bar.innerHTML='';return;}
  var regionFilters=getRegionFilters();
  bar.innerHTML='<button class="topic-chip'+(!ACTIVE_TOPIC?' active':'')+'" type="button" onclick="setTopic(\'\')">\u05D4\u05DB\u05D5\u05DC <span>(' + MEMBERS.length + ')</span></button>'
    +TOPIC_RULES.map(function(t){
      var count=MEMBERS.filter(function(m){return getMemberTopics(m).includes(t.label)}).length;
      return '<button class="topic-chip'+(ACTIVE_TOPIC===t.label?' active':'')+'" type="button" onclick="setTopic(\''+e(t.label).replace(/'/g,"&#39;")+'\')">'+e(t.label)+' <span>(' + count + ')</span></button>';
    }).join('')
    +regionFilters.map(function(label){
      var count=MEMBERS.filter(function(m){return getMemberTopics(m).includes(label)}).length;
      return '<button class="topic-chip'+(ACTIVE_TOPIC===label?' active':'')+'" type="button" onclick="setTopic(\''+e(label).replace(/'/g,"&#39;")+'\')">'+e(label)+' <span>(' + count + ')</span></button>';
    }).join('');
}
function setTopic(topic){
  ACTIVE_TOPIC=topic||'';
  renderTopicBar();
  flt();
}
function setLoading(msg){
  var note=document.getElementById('loadingNote');
  if(!note)return;
  note.textContent=msg||'';
  note.style.display=msg?'block':'none';
}
function renderCards(){
  var steering=document.getElementById('steeringGrid');
  var steeringSection=document.getElementById('steeringSection');
  var steeringMembers=MEMBERS.filter(isSteeringMember).sort(function(a,b){
    var priority={ofir:0,maya:1,omri:2,dana:3};
    var pa=priority[memberId(a)];
    var pb=priority[memberId(b)];
    if(pa===undefined)pa=99;
    if(pb===undefined)pb=99;
    if(pa!==pb)return pa-pb;
    return surnameSortKey(a).localeCompare(surnameSortKey(b),'he');
  });
  var mainMembers=MEMBERS.filter(function(m){return !isSteeringMember(m);}).sort(function(a,b){
    return surnameSortKey(a).localeCompare(surnameSortKey(b),'he');
  });
  g.innerHTML=mainMembers.map(card).join('');
  if(steeringMembers.length){
    steering.innerHTML=steeringMembers.map(card).join('');
    steeringSection.style.display='';
  } else {
    steering.innerHTML='';
    steeringSection.style.display='none';
  }
  setLoading(MEMBERS.length?'':'×˜×•×¢×Ÿ ××ª ×—×‘×¨×™ ×”×¤×•×¨×•×...');
}

function syncBioButtons(){
  document.querySelectorAll('.card-bio').forEach(function(b){
    var cardEl=b.closest('.card');
    var btn=b.querySelector('.bio-toggle');
    if(!btn)return;
    var full=b.querySelector('.bio-full');
    if(full)full.style.display='none';
    if(cardEl)cardEl.classList.remove('expanded');
    btn.style.display=full?'inline-flex':'none';
  });
}

// Initial render from hardcoded data
var g=document.getElementById('grid');
var cachedMembers=loadMembersCache();
if(cachedMembers.length)mergeIntoMembers(cachedMembers.map(applyProfileOverrides));
renderCards();
syncBioButtons();
renderTopicBar();
var cntInit=document.getElementById('cnt');
if(cntInit)cntInit.textContent=membersLabel(MEMBERS.length);

var DATA_ENDPOINT='https://script.google.com/macros/s/AKfycbyJrRU3zTZGtPFH6WPOtZMcqwD0Gwp7_q4lcjYRx0AJnvitPbuSBAUqkp06SYdTPi94vw/exec'; // Paste the deployed Apps Script web app URL here

// Then try to refresh from sheet (picks up new members + photos)
function normImg(v){
  v=(v||'').trim();
  if(!v)return '';
  var m=v.match(/=image\(\s*"([^"]+)"/i)||v.match(/=image\(\s*'([^']+)'/i);
  if(m&&m[1])v=m[1].trim();
  if(/^https?:\/\//i.test(v)){
    if(/:\/\/media\.licdn\.com\//i.test(v)){
      return 'https://images.weserv.nl/?url='+encodeURIComponent(v.replace(/^https?:\/\//i,''))+'&w=400&h=400&fit=cover&output=jpg';
    }
    return v;
  }
  var d=v.match(/https?:\/\/drive\.google\.com\/file\/d\/([^\/?#]+)/i)
    ||v.match(/https?:\/\/drive\.google\.com\/open\?id=([^&#]+)/i)
    ||v.match(/https?:\/\/drive\.google\.com\/uc\?(?:[^#]*&)?id=([^&#]+)/i)
    ||v.match(/^[A-Za-z0-9_-]{20,}$/);
  if(d&&d[1])return 'https://drive.google.com/uc?export=view&id='+d[1];
  if(d&&d[0]===v)return 'https://drive.google.com/uc?export=view&id='+d[0];
  return '';
}

function mergeMembers(fresh){
  if(!fresh||!fresh.length)return;
  fresh.forEach(function(fm){
    var found=MEMBERS.find(function(m){return sameMember(m,fm)});
    if(found){
      mergeMemberData(found,fm);
    } else {
      if(fm.bf&&!fm.bs)fm.bs=preview(fm.bf,170);
      if(fm.hl)fm.hl=parseHighlightsField(fm.hl);
      MEMBERS.push(applyProfileOverrides(fm));
    }
  });
  dedupeMembers();
  renderCards();
  syncBioButtons();
  renderTopicBar();
  var cntMerge=document.getElementById('cnt');
  if(cntMerge)cntMerge.textContent=membersLabel(MEMBERS.length);
  flt();
  saveMembersCache();
  setLoading('');
}

function loadFromAppScript(){
  if(!DATA_ENDPOINT)return Promise.reject(new Error('No endpoint'));
  var cb='_appcb'+Date.now();
  return new Promise(function(resolve,reject){
    var t=setTimeout(function(){delete window[cb];reject(new Error('timeout'))},20000);
    window[cb]=function(data){
      clearTimeout(t);delete window[cb];
      if(!data||!Array.isArray(data.members)){reject(new Error('Bad payload'));return;}
      mergeMembers(data.members.map(sanitizeIncomingMember).filter(function(m){return m&&(m.n||m.li);})); 
      resolve();
    };
    var s=document.createElement('script');
    s.onerror=function(){delete window[cb];clearTimeout(t);reject(new Error('script error'))};
    s.src=DATA_ENDPOINT+(DATA_ENDPOINT.indexOf('?')>=0?'&':'?')+'callback='+cb+'&_='+(Date.now());
    document.head.appendChild(s);
  });
}

function loadFromGviz(){
  var cb='_cb'+Date.now();
  return new Promise(function(resolve,reject){
    var t=setTimeout(function(){delete window[cb];reject(new Error('timeout'))},20000);
    window[cb]=function(resp){
      clearTimeout(t);delete window[cb];
      if(!resp||!resp.table){reject(new Error('No table'));return;}
    var cols=resp.table.cols;
    var rows=resp.table.rows;
    function fi(){for(var k=0;k<arguments.length;k++)for(var i=0;i<cols.length;i++)if((cols[i].label||'').toLowerCase().includes(arguments[k]))return i;return-1}
    var C={fn:fi('\u05E4\u05E8\u05D8\u05D9','first'),ln:fi('\u05DE\u05E9\u05E4\u05D7\u05D4','last'),li:fi('linkedin','\u05DC\u05D9\u05E0\u05E7\u05D3'),ro:fi('\u05EA\u05E4\u05E7\u05D9\u05D3','\u05E2\u05D5\u05E9\u05D9\u05DD','role','title'),lo:fi('\u05D0\u05D9\u05E4\u05D4 \u05D0\u05EA\u05DD \u05D1\u05E2\u05D5\u05DC\u05DD?','\u05D0\u05D9\u05E4\u05D4 \u05D0\u05EA\u05DD \u05D1\u05E2\u05D5\u05DC\u05DD','\u05DE\u05D9\u05E7\u05D5\u05DD','\u05D0\u05D9\u05E4\u05D4','location','city'),lo2:fi('\u05DE\u05D9\u05E7\u05D5\u05DD \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9','\u05D0\u05DD \u05E6\u05D9\u05D9\u05E0\u05EA\u05DD \u05D0\u05D7\u05E8','\u05D4\u05D9\u05DB\u05DF \u05D0\u05EA\u05DD \u05D4\u05D9\u05D5\u05DD','specific location','location specific'),hd:fi('\u05DB\u05D5\u05EA\u05E8\u05EA \u05E8\u05D0\u05E9\u05D9\u05EA','headline','main title'),sd:fi('\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05E9\u05E0\u05D9\u05EA','subtitle','sub title'),hl:fi('3 \u05D1\u05D5\u05DC\u05D8\u05D9\u05DD \u05DC\u05E4\u05D9\u05E8\u05D5\u05D8','3 \u05D1\u05D5\u05DC\u05D8\u05D9\u05DD','\u05D1\u05D5\u05DC\u05D8\u05D9\u05DD','highlights','bullets'),bs:fi('\u05E7\u05E6\u05E8','short'),em:fi('\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC','\u05DE\u05D9\u05D9\u05DC','mail','email'),ph:fi('\u05EA\u05DE\u05D5\u05E0\u05D4','photo','image','picture','img','avatar','url')};
    if(C.fn<0)C.fn=1;
    if(C.ln<0)C.ln=2;
    if(C.li<0)C.li=3;
    if(C.ro<0)C.ro=4;
    if(C.lo<0)C.lo=5;
    if(C.hd<0&&cols.length>=3)C.hd=cols.length-1;
    if(C.sd<0&&cols.length>=2)C.sd=cols.length-2;
    if(C.hl<0&&cols.length>=3)C.hl=cols.length-3;
    if(C.bs<0)C.bs=6;
    if(C.bf===undefined||C.bf<0)C.bf=7;
    if(C.em<0)C.em=8;
    if(C.bs>=0&&C.bf===undefined)C.bf=Math.min(C.bs+1,cols.length-1);
    // If photo col not found by name, look for any column that has image-looking values
    if(C.ph<0&&rows.length>0){
      for(var ci=0;ci<cols.length;ci++){
        for(var ri=0;ri<Math.min(rows.length,5);ri++){
          var v=rows[ri].c[ci]&&rows[ri].c[ci].v?String(rows[ri].c[ci].v):'';
          if(normImg(v)){C.ph=ci;break}
        }
        if(C.ph>=0)break;
      }
    }
    function cv(r,i){
      if(i<0||!r.c[i])return '';
      if(r.c[i].v!==null&&r.c[i].v!==undefined)return String(r.c[i].v).trim();
      if(r.c[i].f!==null&&r.c[i].f!==undefined)return String(r.c[i].f).trim();
      return '';
    }
    var fresh=rows.map(function(r){
      var fn=cv(r,C.fn),ln=cv(r,C.ln);
      if(!fn&&!ln)return null;
      var li=normalizeLinkedInUrl(cv(r,C.li),(fn+' '+ln).trim());
      var ph=normImg(cv(r,C.ph));
      var bs=cv(r,C.bs),bf=cv(r,C.bf);
      return sanitizeIncomingMember({n:(fn+' '+ln).trim(),r:cv(r,C.ro),loc:cv(r,C.lo),loc2:cv(r,C.lo2),hd:cv(r,C.hd),sd:cv(r,C.sd),hl:cv(r,C.hl),li:li,em:cv(r,C.em),bs:bs,bf:bf,ph:ph});
    }).filter(Boolean);
    if(fresh.length>0){
      mergeIntoMembers(fresh);
      renderCards();
      syncBioButtons();
      renderTopicBar();
      var cntGviz=document.getElementById('cnt');
      if(cntGviz)cntGviz.textContent=membersLabel(MEMBERS.length);
      flt();
      saveMembersCache();
      setLoading('');
    }
  };
  var s=document.createElement('script');
  s.onerror=function(){delete window[cb]};
  s.src='https://docs.google.com/spreadsheets/d/'+SHEET_ID+'/gviz/tq?tqx=reqId:0;out:json;callback:'+cb+'&_='+(Date.now());
  document.head.appendChild(s);
  });
}
function loadSheet(){
  var p=Promise.resolve();
  if(DATA_ENDPOINT){
    p=p.then(function(){return withRetries(loadFromAppScript,2,1500);}).catch(function(err){
      console.warn('App Script load failed',err);
    });
  }
  return p
    .then(function(){return withRetries(loadFromGviz,3,1500);})
    .catch(function(err){
      if(MEMBERS.length){
        setLoading('');
      }else{
        setLoading('×œ× ×”×¦×œ×—× ×• ×œ×˜×¢×•×Ÿ ××ª ×—×‘×¨×™ ×”×¤×•×¨×•× ×›×¨×’×¢. × ×¡×• ×œ×¨×¢× ×Ÿ ×©×•×‘.');
      }
      console.warn('Member data refresh failed',err);
    });
}
loadSheet();
window.addEventListener('pageshow',function(){setTimeout(loadSheet,600)});
document.addEventListener('visibilitychange',function(){
  if(document.visibilityState==='visible')setTimeout(loadSheet,400);
});