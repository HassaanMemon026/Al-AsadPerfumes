const message = `
Assalam o Alaikum,

I would like to order:

Product: ${product.name}
Size: ${product.size}
Price: Rs. ${product.price}

Please confirm availability.
`;

const url = `https://wa.me/923211221136?text=${encodeURIComponent(message)}`;
window.open(url, '_blank');