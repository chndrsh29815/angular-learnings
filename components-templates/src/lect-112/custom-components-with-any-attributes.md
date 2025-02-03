# :host css selector vs viewencapsulation settings
when ViewEncapsulation.None is enabled which means shadow dom feature is disable in that case the the scoped css classes can not identify host element but it also enables the scoped css file to be scoped global. which is why if you append css class in parent component then it will work.
