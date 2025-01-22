import { Product, Clothing, Appliance } from "../../data/products.js";

describe('test suite: Product', () => {
  const product = new Product(
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    }
  );

  it('has correct properties', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
  });
  it('gets the price', () => {
    expect(product.getPrice()).toEqual("$10.90");
  });
  it('gets the image url', () => {
    expect(product.getStarsUrl()).toEqual("images/ratings/rating-45.png");
  });
  it('does not display any extra info', () => {
    expect(product.extraInfoHTML()).toEqual('');
  });
});

describe('test suite: clothing', () => {
  const product = new Clothing(
    {
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    }
  );

  it('has correct properties', () => {
    expect(product.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
  });
  it('gets the price', () => {
    expect(product.getPrice()).toEqual("$7.99");
  });
  it('gets the image url', () => {
    expect(product.getStarsUrl()).toEqual("images/ratings/rating-45.png");
  });
  it('display a size chart link in extra info', () => {
    expect(product.extraInfoHTML()).toContain(
      `
      <a href="images/clothing-size-chart.png" target = "_blank">
      Size chart
      </a>
    `
    );
  });
});

describe('test suite: appliance', () => {
  const product = new Appliance(
    {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: "appliance",
      instructionLink: "images/appliance-instructions.png",
      warrantyLink: "images/appliance-warranty.png"
    }
  );

  it('has correct properties', () => {
    expect(product.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
  });
  it('gets the price', () => {
    expect(product.getPrice()).toEqual("$18.99");
  });
  it('gets the image url', () => {
    expect(product.getStarsUrl()).toEqual("images/ratings/rating-50.png");
  });
  it('displays instruction and warranty link in extra info', () => {
    expect(product.extraInfoHTML()).toEqual(
      `
      <a href="images/appliance-instructions.png" target = "_blank">Instructions</a>
      <a href="images/appliance-warranty.png" target = "_blank">Warranty</a>
    `
    );
  });
});
