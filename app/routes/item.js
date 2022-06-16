import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class ItemRoute extends Route {
	model(params) {
		const { id } = params
		return products.find(p => p.id === id)
	}

	setupController(controller, model) {
		super.setupController(controller, model)
		controller.color = model.colors[0].color
	}
}
