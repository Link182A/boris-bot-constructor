import Vue from 'vue'

import ru from 'quasar/lang/ru'
import './styles/quasar.scss'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
	Quasar,
	QLayout,
	QHeader,
	QDrawer,
	QPageContainer,
	QPage,
	QScrollArea,
	QToolbar,
	QToolbarTitle,
	QBtn,
	QIcon,
	QList,
	QItem,
	QItemSection,
	QItemLabel,
	QSeparator,
	Ripple
} from 'quasar'

Vue.use(Quasar, {
	config: {},
	components: {
		QLayout,
		QHeader,
		QDrawer,
		QPageContainer,
		QPage,
		QScrollArea,
		QToolbar,
		QToolbarTitle,
		QBtn,
		QIcon,
		QList,
		QItem,
		QItemSection,
		QItemLabel,
		QSeparator
	},
	directives: {
		Ripple
	},
	plugins: {},
	iconSet: iconSet,
	lang:ru
});
