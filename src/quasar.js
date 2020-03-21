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
	QBtn,
	QIcon,
	QList,
	QItem,
	QItemSection,
	QToolbar,
	QToolbarTitle,
	QItemLabel,
	QSeparator,
	QCard,
	QCardSection,
	TouchPan,
	Ripple
} from 'quasar'

Vue.use(Quasar, {
	config: {},
	components: {
		QLayout,
		// QHeader,
		QDrawer,
		QPageContainer,
		QPage,
		QScrollArea,
		QBtn,
		QIcon,
		QList,
		QItem,
		QItemSection,
		QCard,
		QCardSection,

		// QToolbar,
		// QToolbarTitle,
		// QItemLabel,
		// QSeparator
	},
	directives: {
		Ripple,
		TouchPan
	},
	plugins: {},
	iconSet: iconSet,
	lang: ru
});
