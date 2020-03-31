import CONSTANTS from '@/constants';

export default {
	base: {
		block: 'Блок',
		types: {
			[CONSTANTS.BLOCK_TYPES.TIMEOUT]: 'Таймаут',
			[CONSTANTS.BLOCK_TYPES.BUTTONS]: 'Кнопки'
		},
		tooltips: {
			clone: 'Дублировать блок',
			geo: 'Добавить гео',
			addImage: 'Добавить изображение',
			remove: 'Удалить блок'
		},
		addImage: {
			fileType: 'Тип файла',
			photoFile: 'Загрузите фото',
			videoFile: 'Вставить видео',
			photoCaption: 'Изображение не может быть больше 2мб!',
			back: 'Назад',
			save: 'Сохранить',
			videoCaption: 'Добавить ссылку на видео',
			videoHint: 'Ссылка должна быть с YouTube'
		},
		geo: {
			inputLabel: 'Введите координаты'
		},
		transfers: {
			addBlock: 'Создать блок',
			goToBlock: 'Переход к блоку',
			goToScript: 'Переход к скрипту',
			action: 'Выполнить действие'
		}
	},
	timeout: {
		inputLabel: 'Введите сообщение',
		text: 'Задержка в секундах',
		emptyError: 'Задержка должна быть от 0 до 10сек'

	},
	buttons: {
		inputLabel: 'Введите текст кнопки',
		addButton: 'Добавить'
	}
};
