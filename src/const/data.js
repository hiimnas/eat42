import images from './images';

const menu = {
  appetizers: [
    {
      title: 'Eat42 Signature Salad',
      price: '$12',
      description: 'A mix of organic greens, roasted vegetables, quinoa, and a citrus vinaigrette.',
    },
    {
      title: 'Crispy Cauliflower Bites',
      price: '$9',
      description: 'Cauliflower florets lightly battered and fried, served with a spicy aioli dipping sauce.',
    },
    {
      title: 'Avocado Toast',
      price: '$10',
      description: 'Sourdough bread topped with mashed avocado, cherry tomatoes, feta cheese, and a drizzle of balsamic glaze.',
    },
    {
      title: 'Smoked Salmon Crostini',
      price: '$14',
      description: 'Toasted baguette slices topped with herbed cream cheese, smoked salmon, and capers.',
    },
  ],
  mainCourses: [
    {
      title: 'Grilled Chimichurri Steak',
      price: '$28',
      description: 'Tender steak marinated in chimichurri sauce, grilled to perfection, served with roasted potatoes and seasonal vegetables.',
    },
    {
      title: 'Spaghetti Carbonara',
      price: '$18',
      description: 'Pasta dish with bacon, greens, eggs, Parmesan cheese, and fresh black pepper.',
    },
    {
      title: 'Vegan Buddha Bowl',
      price: '$16',
      description: 'Quinoa, roasted sweet potatoes, chickpeas, avocado, and tahini dressing.',
    },
    {
      title: 'Lemon Herb Grilled Salmon',
      price: '$22',
      description: 'Wild salmon marinated in lemon, garlic, and herbs, grilled and served with rice and steamed broccoli.',
    },
  ],
  sides: [
    {
      title: 'Truffle Parmesan Fries',
      price: '$8',
      description: 'Crispy fries tossed with truffle oil, Parmesan cheese, and fresh parsley.',
    },
    {
      title: 'Garlic Butter Asparagus',
      price: '$9',
      description: 'Asparagus spears sautéed in garlic butter and finished with a sprinkle of sea salt.',
    },
    {
      title: 'Quinoa Pilaf',
      price: '$7',
      description: 'Quinoa cooked with vegetables, herbs, and a hint of lemon zest.',
    },
    {
      title: 'Creamy Mashed Potatoes',
      price: '$6',
      description: 'Russet potatoes mashed with butter, cream, and seasoned to perfection.',
    },
  ],
  desserts: [
    {
      title: 'Chocolate Lava Cake',
      price: '$10',
      description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream and a raspberry coulis.',
    },
    {
      title: 'Berry Parfait',
      price: '$8',
      description: 'Layers of Greek yogurt, mixed berries, and granola, topped with honey and mint.',
    },
    {
      title: 'Apple Crisp',
      price: '$9',
      description: 'Baked apples topped with a cinnamon oat crumble, served with a scoop of vanilla bean ice cream.',
    },
    {
      title: 'Mango Sorbet',
      price: '$7',
      description: 'Refreshing mango sorbet served in a hollowed-out mango shell, garnished with fresh mint.',
    },
  ],
  beverages: [
    {
      title: 'Fresh Juices',
      price: '$6',
      description: 'Orange, apple, carrot, or a custom blend.',
    },
    {
      title: 'SpecialTeas and Coffees',
      price: '$5',
      description: 'Espresso, cappuccino, latte, herbal teas, and more.',
    },
    {
      title: 'Craft Cocktails',
      price: '$12',
      description: 'Seasonal cocktails made with fresh fruits, herbs, and premium spirits.',
    },
    {
      title: 'Beer & Wine Selection',
      price: 'Varies',
      description: 'Local craft beers, international wines, and a curated list of spirits.',
    },
  ],
  awards: [
    {
      imgUrl: images.award01,
      title: 'Flavor Fusion Award',
      subtitle: 'Recognizing restaurants that blend creativity and skill to deliver exceptional culinary experiences.',
    },
    {
      imgUrl: images.award02,
      title: 'Hospitality Excellence Prize',
      subtitle: 'Honoring restaurants that provide outstanding service and warmth to create memorable dining experiences.',
    },
    {
      imgUrl: images.award03,
      title: 'Eco-Friendly Eats Trophy',
      subtitle: 'Celebrating restaurants committed to sustainability and responsible sourcing of ingredients.',
    },
    {
      imgUrl: images.award05,
      title: 'Global Gastronomy Honor',
      subtitle: 'Acknowledging restaurants that excel in showcasing authentic flavors and culinary traditions from around the world.',
    },
  ],
};

export default menu;
