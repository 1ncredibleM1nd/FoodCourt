document.addEventListener ('DOMContentLoaded', () => {
	
	//Tabs
	const tabs = document.querySelectorAll ('.tabheader__item'),
		tabsContent = document.querySelectorAll ('.tabcontent'),
		tabsParent = document.querySelector ('.tabheader__items');
	
	function hideTabContent() {
		tabsContent.forEach (tab => {
			tab.style.display = 'none';
			
		});
		tabs.forEach (tab => {
			tab.classList.remove ('tabheader__item_active');
		});
		
	}
	
	function showTabContent(i = 0) {
		tabsContent[i].style.display = "block";
		tabs[i].classList.add ('tabheader__item_active');
	}
	
	hideTabContent ();
	showTabContent ();
	
	tabsParent.addEventListener ('click', (event) => {
		const target = event.target;
		if (target && target.classList.contains ('tabheader__item')) {
			tabs.forEach ((item, i) => {
				if (target === item) {
					hideTabContent ();
					showTabContent (i);
				}
			});
		}
	})
	
	//Timer
	
	const deadline = '2020-06-19';
	
	function getTimeRemaining(endtime) {
		const t = Date.parse (endtime) - Date.parse (new Date ()),
			days = Math.floor ((t / (1000 * 60 * 60 * 24))),
			seconds = Math.floor ((t / 1000) % 60),
			minutes = Math.floor ((t / 1000 / 60) % 60),
			hours = Math.floor ((t / (1000 * 60 * 60) % 24));
		
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return '0' + num;
		}
		else {
			return num;
		}
	}
	
	function setClock(selector, endtime) {
		
		const timer = document.querySelector (selector),
			days = timer.querySelector ("#days"),
			hours = timer.querySelector ('#hours'),
			minutes = timer.querySelector ('#minutes'),
			seconds = timer.querySelector ('#seconds'),
			timeInterval = setInterval (updateClock, 1000);
		
		updateClock ();
		
		function updateClock() {
			const t = getTimeRemaining (endtime);
			
			days.innerHTML = getZero (t.days);
			hours.innerHTML = getZero (t.hours);
			minutes.innerHTML = getZero (t.minutes);
			seconds.innerHTML = getZero (t.seconds);
			
			if (t.total <= 0) {
				clearInterval (timeInterval);
			}
		}
	}
	
	setClock ('.timer', deadline);
	
	//Сard with classes
	
	class Menucard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector (parentSelector);
			this.transfer = 27;
			this.changeToUAH ();
		}
		
		changeToUAH() {
			this.price *= this.transfer;
		}
		
		render() {
			const element = document.createElement ('div');
			if(this.classes.length===0){
				this.element = 'menu__item';
				element.classList.add(this.element);
			}else {
				this.classes.forEach (className => element.classList.add (className));
			}
			
			
			element.innerHTML = `
			 
             <img src=${this.src} alt=${this.alt}>
             <h3 class="menu__item-subtitle">${this.title}</h3>
             <div class="menu__item-descr">${this.descr}</div>
             <div class="menu__item-divider"></div>
             <div class="menu__item-price">
                 <div class="menu__item-cost">Цена:</div>
                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
             </div>
             
			`;
			this.parent.append (element);
		}
	}
	
	new Menucard (
		"img/tabs/vegy.jpg",
		"vegy",
		"Меню Фитнес",
		"Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
		9,
		'.menu .container',
		'menu__item'
	).render ();
	
	
	//Forms
	

});