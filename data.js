const unsplashAccessKey = 'inZL2RKXnE4OCW2fFIfWPlC0MqVpymUnkQCEWCnrhCQ';

const getUnsplashUrl = async (query) => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${unsplashAccessKey}`);
    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error("Error fetching Unsplash image:", error);
    return `https://via.placeholder.com/400x300?text=${query.replace(',', '+')}`;
  }
};

const createDataEntry = async (query, h1, copy, linkLabel, linkSrc) => {
  return {
    img: await getUnsplashUrl(query),
    h1,
    copy,
    linkLabel,
    linkSrc
  };
};

const initializeData = async () => {
  return {
    January: [
      await createDataEntry('abstract,art', "Abstract Art Fusion", "Explore the bold fusion of colors and shapes in this abstract art collection.", "View Collection", "https://example.com/abstract-art-fusion"),
      await createDataEntry('sculpture', "Sculptural Masterpieces", "Dive into a world of intricate sculptures that push the boundaries of form.", "Discover Sculptures", "https://example.com/sculptural-masterpieces")
    ],
    February: [
      await createDataEntry('impressionism', "Impressionist Delights", "Discover the beauty of impressionism with stunning landscapes and portraits.", "Learn More", "https://example.com/impressionist-delights"),
      await createDataEntry('installation,art', "Contemporary Installations", "A journey through modern installation art that transforms space and perception.", "Explore Installations", "https://example.com/contemporary-installations")
    ],
    March: [
      await createDataEntry('surrealism', "Surrealist Visions", "Experience the dreamlike world of surrealist art and its bizarre, thought-provoking visuals.", "Discover Surrealism", "https://example.com/surrealist-visions"),
      await createDataEntry('pop,art', "Pop Art Icons", "Celebrate the vibrant world of pop art and its iconic symbols of culture.", "Explore Pop Art", "https://example.com/pop-art-icons")
    ],
    April: [
      await createDataEntry('photorealism', "Photorealism Marvels", "Be amazed by photorealistic artworks that blur the line between photography and painting.", "See Photorealism", "https://example.com/photorealism-marvels"),
      await createDataEntry('street,art', "Street Art Culture", "Dive into the rebellious spirit of street art and its bold, urban expressions.", "Discover Street Art", "https://example.com/street-art-culture")
    ],
    May: [
      await createDataEntry('modern,art', "Modern Art Evolution", "Explore the dynamic evolution of modern art through a series of captivating paintings.", "Explore More", "https://example.com/modern-art-evolution"),
      await createDataEntry('sculpture,installation', "Sculpture Innovations", "Discover groundbreaking approaches to sculpture and installation art.", "Discover Now", "https://example.com/sculpture-innovations")
    ],
    June: [
      await createDataEntry('renaissance,art', "Renaissance Revival", "Experience the revival of Renaissance techniques in modern interpretations of classic themes.", "Learn More", "https://example.com/renaissance-revival"),
      await createDataEntry('minimalist,art', "Minimalist Art Trends", "Explore the simplicity and elegance of minimalist art in its purest forms.", "Explore Minimalism", "https://example.com/minimalist-art-trends")
    ],
    July: [
      await createDataEntry('avant-garde,art', "Avant-Garde Movements", "Join the avant-garde movement with experimental art that challenges norms.", "Discover Avant-Garde", "https://example.com/avant-garde-movements"),
      await createDataEntry('cubism', "Cubist Revolutions", "Explore the revolutionary cubist artworks that broke the mold of traditional representation.", "Learn More", "https://example.com/cubist-revolutions")
    ],
    August: [
      await createDataEntry('futurism,art', "Futurism in Art", "Step into the future with art that embraces technology and innovation.", "See Futurism", "https://example.com/futurism-in-art"),
      await createDataEntry('expressionism', "Expressionist Emotions", "Discover the raw emotion and intensity of expressionist paintings.", "Explore Expressionism", "https://example.com/expressionist-emotions")
    ],
    September: [
      await createDataEntry('baroque,art', "Baroque Inspirations", "Experience the grandeur and drama of Baroque art in contemporary settings.", "Discover Baroque", "https://example.com/baroque-inspirations"),
      await createDataEntry('neoclassicism', "Neo-Classicism Reimagined", "Explore how neo-classical themes are reinterpreted in modern art.", "Learn More", "https://example.com/neo-classicism-reimagined")
    ],
    October: [
      await createDataEntry('gothic,art', "Gothic Art Revival", "Dive into the dark and mysterious world of Gothic art with contemporary twists.", "Explore Gothic Art", "https://example.com/gothic-art-revival"),
      await createDataEntry('postmodern,art', "Post-Modernism Perspectives", "Explore how post-modernism challenges traditional narratives in art.", "Discover Post-Modernism", "https://example.com/post-modernism-perspectives")
    ]
  };
};

export default initializeData;