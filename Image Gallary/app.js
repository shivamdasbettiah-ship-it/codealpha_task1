/**
 * LUMINA - NEXT-GEN INTERACTIVE VISUAL GALLERY
 * Core Application Engine
 */

(function () {
  'use strict';

  /* =========================================================
     1. PHOTO DATASET (Curated High-Res Unsplash Photography)
     ========================================================= */
  const GALLERY_DATA = [
    {
      id: 'lum-01',
      title: 'Neon Odyssey in Shinjuku',
      category: 'Cyberpunk & Neon',
      tags: ['Cyberpunk', 'Tokyo', 'Night', 'Rain', 'Neon', 'Street'],
      location: 'Shinjuku, Tokyo, Japan',
      photographer: {
        name: 'Aleksandar Pasaric',
        handle: '@apasaric',
        avatar: 'https://images.unsplash.com/profile-1559846399990-27a3c33306db?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@apasaric'
      },
      src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.45', // height ratio for masonry
      likes: 342,
      description: 'Reflections of cyberpunk neon signs dancing across wet asphalt in the heart of nocturnal Shinjuku.',
      exif: {
        camera: 'Sony Alpha 7R IV',
        lens: 'FE 35mm F1.4 GM',
        aperture: 'f/1.8',
        shutter: '1/160s',
        iso: 'ISO 800',
        resolution: '9504 × 6336'
      }
    },
    {
      id: 'lum-02',
      title: 'Solitude of the Nordic Peaks',
      category: 'Nature & Wildlife',
      tags: ['Mountains', 'Lofoten', 'Winter', 'Snow', 'Aurora', 'Fjord'],
      location: 'Reine, Lofoten Islands, Norway',
      photographer: {
        name: 'Roberto Nickson',
        handle: '@rpnickson',
        avatar: 'https://images.unsplash.com/profile-1506546377317-063fb55c06c1?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@rpnickson'
      },
      src: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.75',
      likes: 512,
      description: 'Dramatic granite peaks rising sheer from the Arctic Ocean under soft twilight pastel hues.',
      exif: {
        camera: 'Hasselblad X2D 100C',
        lens: 'XCD 21mm f/4',
        aperture: 'f/8.0',
        shutter: '1/4s',
        iso: 'ISO 64',
        resolution: '11656 × 8742'
      }
    },
    {
      id: 'lum-03',
      title: 'Futuristic Helix Spiral',
      category: 'Architecture & Urban',
      tags: ['Architecture', 'Modern', 'Spiral', 'Minimal', 'Interior', 'Geometry'],
      location: 'Vatican City & Rome, Italy',
      photographer: {
        name: 'Simone Hutsch',
        handle: '@heysupersimi',
        avatar: 'https://images.unsplash.com/profile-1549488349280-ff64eb4b62f8?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@heysupersimi'
      },
      src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.25',
      likes: 289,
      description: 'Mesmerizing geometric rhythm created by winding curves and monolithic staircase architecture.',
      exif: {
        camera: 'Canon EOS R5',
        lens: 'RF 15-35mm F2.8L IS USM',
        aperture: 'f/5.6',
        shutter: '1/60s',
        iso: 'ISO 200',
        resolution: '8192 × 5464'
      }
    },
    {
      id: 'lum-04',
      title: 'Cosmic Core: Milky Way Over Atacama',
      category: 'Astrophotography',
      tags: ['Milky Way', 'Space', 'Stars', 'Desert', 'Night Sky', 'Astronomy'],
      location: 'Atacama Desert, Chile',
      photographer: {
        name: 'Jeremy Thomas',
        handle: '@jeremythomasphoto',
        avatar: 'https://images.unsplash.com/profile-1502476595509-66cb808dc2d7?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@jeremythomasphoto'
      },
      src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.67',
      likes: 780,
      description: 'The galactic core glowing above the driest non-polar desert on Earth under pristine atmospheric clarity.',
      exif: {
        camera: 'Nikon Z9 Astro-Mod',
        lens: 'NIKKOR Z 14-24mm f/2.8 S',
        aperture: 'f/2.8',
        shutter: '25s',
        iso: 'ISO 3200',
        resolution: '8256 × 5504'
      }
    },
    {
      id: 'lum-05',
      title: 'Gaze into Emerald Reverie',
      category: 'Portraits & Human',
      tags: ['Portrait', 'Cinematic', 'Lighting', 'Moody', 'Gaze', 'Studio'],
      location: 'Berlin, Germany',
      photographer: {
        name: 'Aiony Haust',
        handle: '@aiony',
        avatar: 'https://images.unsplash.com/profile-1560935541999-73e46c7ba281?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@aiony'
      },
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.35',
      likes: 645,
      description: 'High-contrast evocative portrait capturing authentic expression through dramatic split-tone illumination.',
      exif: {
        camera: 'Leica SL2',
        lens: 'Summilux-SL 50mm f/1.4 ASPH',
        aperture: 'f/1.4',
        shutter: '1/320s',
        iso: 'ISO 100',
        resolution: '8368 × 5584'
      }
    },
    {
      id: 'lum-06',
      title: 'Prismatic Fluid Waves',
      category: 'Abstract & Minimal',
      tags: ['Abstract', 'Fluid', 'Color', 'Macro', 'Texture', 'Art'],
      location: 'London Studio, UK',
      photographer: {
        name: 'Pawel Czerwinski',
        handle: '@pawel_czerwinski',
        avatar: 'https://images.unsplash.com/profile-1523456789-abc?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@pawel_czerwinski'
      },
      src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.8',
      likes: 420,
      description: 'High-speed macro capture of iridescent inks blending in suspension, creating ethereal dreamscapes.',
      exif: {
        camera: 'Sony Alpha 1',
        lens: 'FE 90mm f/2.8 Macro G OSS',
        aperture: 'f/8.0',
        shutter: '1/1000s',
        iso: 'ISO 200',
        resolution: '8640 × 5760'
      }
    },
    {
      id: 'lum-07',
      title: 'Misty Alpine Valley Sunrise',
      category: 'Nature & Wildlife',
      tags: ['Dolomites', 'Alps', 'Sunrise', 'Fog', 'Italy', 'Landscape'],
      location: 'Val di Funes, Dolomites, Italy',
      photographer: {
        name: 'Daniel Seßler',
        handle: '@danielsessler',
        avatar: 'https://images.unsplash.com/profile-1577712345-xyz?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@danielsessler'
      },
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.67',
      likes: 910,
      description: 'Morning golden light slicing through layers of valley mist beneath jagged Dolomite pinnacles.',
      exif: {
        camera: 'Fujifilm GFX 100S',
        lens: 'GF 32-64mm f/4 R LM WR',
        aperture: 'f/11',
        shutter: '1/8s',
        iso: 'ISO 100',
        resolution: '11648 × 8736'
      }
    },
    {
      id: 'lum-08',
      title: 'Glass & Steel Metamorphosis',
      category: 'Architecture & Urban',
      tags: ['Skyscraper', 'Facade', 'Reflections', 'Urban', 'Geometry', 'City'],
      location: 'Hudson Yards, New York, USA',
      photographer: {
        name: 'Luca Bravo',
        handle: '@lucabravo',
        avatar: 'https://images.unsplash.com/profile-1473456789-abc?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@lucabravo'
      },
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.4',
      likes: 315,
      description: 'Futuristic glass elevations intersecting against the sky in Manhattan’s high-tech skyline.',
      exif: {
        camera: 'Nikon Z7 II',
        lens: 'NIKKOR Z 24-70mm f/2.8 S',
        aperture: 'f/8.0',
        shutter: '1/250s',
        iso: 'ISO 100',
        resolution: '8256 × 5504'
      }
    },
    {
      id: 'lum-09',
      title: 'Neon Drench: Seoul Alleyway',
      category: 'Cyberpunk & Neon',
      tags: ['Seoul', 'Korea', 'Neon', 'Rain', 'Umbrella', 'Cyberpunk'],
      location: 'Hongdae, Seoul, South Korea',
      photographer: {
        name: 'Ciaran O’Brien',
        handle: '@ciaranobrien',
        avatar: 'https://images.unsplash.com/profile-1563212345-def?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@ciaranobrien'
      },
      src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.3',
      likes: 472,
      description: 'Magenta and cyan signs reflecting on rainy alleys as pedestrians move under translucent umbrellas.',
      exif: {
        camera: 'Sony Alpha 7S III',
        lens: 'FE 24mm F1.4 GM',
        aperture: 'f/1.4',
        shutter: '1/200s',
        iso: 'ISO 1600',
        resolution: '4240 × 2832'
      }
    },
    {
      id: 'lum-10',
      title: 'Bioluminescent Stellar Nebula',
      category: 'Astrophotography',
      tags: ['Deep Space', 'Nebula', 'Hubble', 'Cosmos', 'Stars', 'Universe'],
      location: 'Orion Constellation, Deep Sky',
      photographer: {
        name: 'NASA / ESA Hubble',
        handle: '@nasa',
        avatar: 'https://images.unsplash.com/profile-1446404465118-3a53e909cc82?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@nasa'
      },
      src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.7',
      likes: 1240,
      description: 'Stellar nursery sculptured by stellar winds and ultraviolet radiation across light-years of interstellar dust.',
      exif: {
        camera: 'Hubble Space Telescope ACS',
        lens: 'WFC3 Optical Channel',
        aperture: 'f/24',
        shutter: '3600s Exposure',
        iso: 'Sensor Unit 1',
        resolution: '16000 × 12000'
      }
    },
    {
      id: 'lum-11',
      title: 'The Silent Monarch: King of the Savanna',
      category: 'Nature & Wildlife',
      tags: ['Lion', 'Wildlife', 'Safari', 'Kenya', 'Predator', 'Nature'],
      location: 'Masai Mara National Reserve, Kenya',
      photographer: {
        name: 'Geran de Klerk',
        handle: '@gerandeklerk',
        avatar: 'https://images.unsplash.com/profile-1501234567-ghi?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@gerandeklerk'
      },
      src: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.67',
      likes: 855,
      description: 'An intimate portrait of a male lion standing watch at dawn against golden savanna grasslands.',
      exif: {
        camera: 'Canon EOS-1D X Mark III',
        lens: 'EF 400mm f/2.8L IS III USM',
        aperture: 'f/2.8',
        shutter: '1/1250s',
        iso: 'ISO 400',
        resolution: '5472 × 3648'
      }
    },
    {
      id: 'lum-12',
      title: 'Minimalist Monochrome Mirage',
      category: 'Abstract & Minimal',
      tags: ['Minimalism', 'Shadow', 'Architecture', 'Clean', 'White', 'Graphic'],
      location: 'Valencia, Spain',
      photographer: {
        name: 'Jean-Philippe Delberghe',
        handle: '@jpholiday',
        avatar: 'https://images.unsplash.com/profile-1512345678-jkl?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@jpholiday'
      },
      src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.2',
      likes: 360,
      description: 'Pure architectural composition using stark shadows, pristine curves, and negative space.',
      exif: {
        camera: 'Leica M11',
        lens: 'APO-Summicron-M 35mm f/2 ASPH',
        aperture: 'f/5.6',
        shutter: '1/500s',
        iso: 'ISO 64',
        resolution: '9528 × 6328'
      }
    },
    {
      id: 'lum-13',
      title: 'Embers of Aurora Borealis',
      category: 'Astrophotography',
      tags: ['Northern Lights', 'Aurora', 'Iceland', 'Night', 'Green', 'Winter'],
      location: 'Kirkjufell, Iceland',
      photographer: {
        name: 'Jonatan Pie',
        handle: '@jonatanpie',
        avatar: 'https://images.unsplash.com/profile-1498765432-mno?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@jonatanpie'
      },
      src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.67',
      likes: 994,
      description: 'Vibrant curtains of solar plasma dancing above the iconic mountain of Kirkjufell during peak aurora activity.',
      exif: {
        camera: 'Sony Alpha 7S III',
        lens: 'FE 14mm F1.8 GM',
        aperture: 'f/1.8',
        shutter: '4s',
        iso: 'ISO 2500',
        resolution: '4240 × 2832'
      }
    },
    {
      id: 'lum-14',
      title: 'Sovereign of the Dunes',
      category: 'Portraits & Human',
      tags: ['Desert', 'Traditional', 'Fabric', 'Eyes', 'Portrait', 'Sahara'],
      location: 'Merzouga, Sahara Desert, Morocco',
      photographer: {
        name: 'Trevor Cole',
        handle: '@trevcole',
        avatar: 'https://images.unsplash.com/profile-1509876543-pqr?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@trevcole'
      },
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.45',
      likes: 678,
      description: 'Intense gaze framed by wind-blown indigo tagelmust fabric against shifting golden desert dunes.',
      exif: {
        camera: 'Nikon Z8',
        lens: 'NIKKOR Z 85mm f/1.2 S',
        aperture: 'f/1.8',
        shutter: '1/800s',
        iso: 'ISO 100',
        resolution: '8256 × 5504'
      }
    },
    {
      id: 'lum-15',
      title: 'Metropolis in the Clouds',
      category: 'Architecture & Urban',
      tags: ['Fog', 'Dubai', 'Skyscrapers', 'Aerial', 'Sunrise', 'Modern'],
      location: 'Downtown Dubai, UAE',
      photographer: {
        name: 'ZQ Lee',
        handle: '@zqlee',
        avatar: 'https://images.unsplash.com/profile-1534567890-stu?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@zqlee'
      },
      src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.67',
      likes: 720,
      description: 'Super-tall architectural wonders piercing through thick thermal inversion fog during morning twilight.',
      exif: {
        camera: 'DJI Mavic 3 Pro Cine',
        lens: 'Hasselblad 24mm f/2.8',
        aperture: 'f/4.0',
        shutter: '1/120s',
        iso: 'ISO 100',
        resolution: '5280 × 3956'
      }
    },
    {
      id: 'lum-16',
      title: 'Fluorescent Dreamscape Matrix',
      category: 'Cyberpunk & Neon',
      tags: ['Neon', 'Hong Kong', 'Cyberpunk', 'Futuristic', 'Colors', 'Night'],
      location: 'Kowloon, Hong Kong',
      photographer: {
        name: 'Steven Wei',
        handle: '@stevenwei',
        avatar: 'https://images.unsplash.com/profile-1512987654-vwx?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@stevenwei'
      },
      src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.7',
      likes: 589,
      description: 'Vivid retro-futuristic illumination casting intense saturation on urban structures and night traffic.',
      exif: {
        camera: 'Fujifilm X-T5',
        lens: 'XF 16-55mm F2.8 R LM WR',
        aperture: 'f/2.8',
        shutter: '1/90s',
        iso: 'ISO 1250',
        resolution: '7728 × 5152'
      }
    },
    {
      id: 'lum-17',
      title: 'The Emerald Cascades of Plitvice',
      category: 'Nature & Wildlife',
      tags: ['Waterfalls', 'Croatia', 'Lakes', 'Green', 'Forest', 'Nature'],
      location: 'Plitvice Lakes National Park, Croatia',
      photographer: {
        name: 'Federico Di Dio photography',
        handle: '@federicodidio',
        avatar: 'https://images.unsplash.com/profile-1554321098-yza?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@federicodidio'
      },
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.67',
      likes: 642,
      description: 'Pristine turquoise water terraces framed by lush moss-covered limestone and dense forest canopies.',
      exif: {
        camera: 'Canon EOS R6',
        lens: 'RF 24-105mm F4L IS USM',
        aperture: 'f/8.0',
        shutter: '1/30s',
        iso: 'ISO 100',
        resolution: '5472 × 3648'
      }
    },
    {
      id: 'lum-18',
      title: 'Sculpture of Light & Shadow',
      category: 'Abstract & Minimal',
      tags: ['Architecture', 'Lines', 'Geometry', 'Shadows', 'Black and White', 'Minimal'],
      location: 'Tokyo International Forum, Japan',
      photographer: {
        name: 'Ryoji Iwata',
        handle: '@ryoji__iwata',
        avatar: 'https://images.unsplash.com/profile-1504567890-bcd?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@ryoji__iwata'
      },
      src: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.4',
      likes: 410,
      description: 'Dramatic diagonal interplay between glass shadows and solitary human figures in an open hall.',
      exif: {
        camera: 'Ricoh GR III',
        lens: 'GR Lens 18.3mm f/2.8',
        aperture: 'f/4.5',
        shutter: '1/400s',
        iso: 'ISO 200',
        resolution: '6000 × 4000'
      }
    },
    {
      id: 'lum-19',
      title: 'Radiance of the Golden Geisha',
      category: 'Portraits & Human',
      tags: ['Culture', 'Kyoto', 'Japan', 'Kimono', 'Tradition', 'Portrait'],
      location: 'Gion District, Kyoto, Japan',
      photographer: {
        name: 'Sora Sagano',
        handle: '@sorasagano',
        avatar: 'https://images.unsplash.com/profile-1521098765-efg?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@sorasagano'
      },
      src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.7',
      likes: 820,
      description: 'Intricate silk embroidery illuminated by traditional paper lanterns in Kyoto’s historic preservation quarter.',
      exif: {
        camera: 'Sony Alpha 7R V',
        lens: 'FE 50mm F1.2 GM',
        aperture: 'f/1.4',
        shutter: '1/250s',
        iso: 'ISO 640',
        resolution: '9504 × 6336'
      }
    },
    {
      id: 'lum-20',
      title: 'Galactic Horizon over Mt. Fuji',
      category: 'Astrophotography',
      tags: ['Mt Fuji', 'Japan', 'Milky Way', 'Night Sky', 'Stars', 'Lake'],
      location: 'Lake Yamanaka, Yamanashi, Japan',
      photographer: {
        name: 'Tania Mousinho',
        handle: '@taniamousinho',
        avatar: 'https://images.unsplash.com/profile-1536789012-hij?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@taniamousinho'
      },
      src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.67',
      likes: 975,
      description: 'Snow-capped symmetrical silhouette of Mount Fuji standing peaceful beneath the stellar galactic band.',
      exif: {
        camera: 'Sony Alpha 7 IV',
        lens: 'FE 20mm F1.8 G',
        aperture: 'f/1.8',
        shutter: '20s',
        iso: 'ISO 2000',
        resolution: '7008 × 4672'
      }
    },
    {
      id: 'lum-21',
      title: 'Cyberpunk Metropolis Under Neon Rain',
      category: 'Cyberpunk & Neon',
      tags: ['Cyberpunk', 'Rain', 'Neon', 'Sci-Fi', 'Night', 'Vehicles'],
      location: 'Bangkok, Thailand',
      photographer: {
        name: 'Florian Wehde',
        handle: '@florianwehde',
        avatar: 'https://images.unsplash.com/profile-1547890123-klm?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@florianwehde'
      },
      src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.35',
      likes: 530,
      description: 'High-density urban canyons glowing with electric signage through tropical downpours.',
      exif: {
        camera: 'Canon EOS R5',
        lens: 'RF 28-70mm F2L USM',
        aperture: 'f/2.0',
        shutter: '1/125s',
        iso: 'ISO 1000',
        resolution: '8192 × 5464'
      }
    },
    {
      id: 'lum-22',
      title: 'Monolithic Cantilever Marvel',
      category: 'Architecture & Urban',
      tags: ['Architecture', 'Concrete', 'Modernism', 'Brutalism', 'Lines'],
      location: 'Berlin Kulturforum, Germany',
      photographer: {
        name: 'Philipp Katzenberger',
        handle: '@phil_k',
        avatar: 'https://images.unsplash.com/profile-1558901234-nop?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@phil_k'
      },
      src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.25',
      likes: 298,
      description: 'Daring architectural balance of suspended raw concrete planes intersecting against pristine skies.',
      exif: {
        camera: 'Leica Q2 Monochrom',
        lens: 'Summilux 28mm f/1.7 ASPH',
        aperture: 'f/5.6',
        shutter: '1/640s',
        iso: 'ISO 100',
        resolution: '8368 × 5584'
      }
    },
    {
      id: 'lum-23',
      title: 'Autumnal Serenity in Jasper',
      category: 'Nature & Wildlife',
      tags: ['Canada', 'Mountains', 'Autumn', 'Lake', 'Reflections', 'Trees'],
      location: 'Jasper National Park, Alberta, Canada',
      photographer: {
        name: 'Kalpesh Patel',
        handle: '@kalpesh_patel',
        avatar: 'https://images.unsplash.com/profile-1569012345-qrs?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@kalpesh_patel'
      },
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '0.67',
      likes: 880,
      description: 'Glassy turquoise glacial waters mirroring vibrant gold aspen forests and snow-dusted Canadian Rockies.',
      exif: {
        camera: 'Nikon D850',
        lens: 'AF-S NIKKOR 24-70mm f/2.8E ED VR',
        aperture: 'f/8.0',
        shutter: '1/50s',
        iso: 'ISO 64',
        resolution: '8256 × 5504'
      }
    },
    {
      id: 'lum-24',
      title: 'Ephemeral Chromatic Vortex',
      category: 'Abstract & Minimal',
      tags: ['Macro', 'Abstract', 'Prism', 'Refraction', 'Color', 'Glass'],
      location: 'Zurich Design Studio, Switzerland',
      photographer: {
        name: 'Joel Filipe',
        handle: '@joelfilip',
        avatar: 'https://images.unsplash.com/profile-1570123456-tuv?auto=format&fit=crop&w=64&q=80',
        url: 'https://unsplash.com/@joelfilip'
      },
      src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=85',
      thumb: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=500&q=75',
      aspectRatio: '1.4',
      likes: 467,
      description: 'Prismatic optical dispersion bending spectrum wavelengths across sculpted crystal glass surfaces.',
      exif: {
        camera: 'Sony Alpha 1',
        lens: 'FE 100mm f/2.8 STF GM OSS',
        aperture: 'f/2.8',
        shutter: '1/320s',
        iso: 'ISO 100',
        resolution: '8640 × 5760'
      }
    }
  ];

  /* =========================================================
     2. APPLICATION STATE
     ========================================================= */
  const state = {
    items: [...GALLERY_DATA],
    filteredItems: [...GALLERY_DATA],
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    activeFx: 'fx-normal',
    layoutMode: 'layout-masonry',
    onlyFavorites: false,
    favorites: new Set(JSON.parse(localStorage.getItem('lumina_favorites') || '[]')),
    theme: localStorage.getItem('lumina_theme') || 'dark',
    soundEnabled: localStorage.getItem('lumina_sound') !== 'false',

    // Lightbox state
    isLightboxOpen: false,
    currentIndex: 0,
    isSlideshowRunning: false,
    slideshowInterval: null,
    slideshowProgressTimer: null,
    slideshowDuration: 4500, // 4.5 seconds per slide
    zoomLevel: 1,
    panOffset: { x: 0, y: 0 },
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    isInfoOpen: false,

    // Touch gesture state
    touchStartX: 0,
    touchStartY: 0,
    touchEndX: 0,
    touchEndY: 0
  };

  /* =========================================================
     3. DOM ELEMENTS CACHE
     ========================================================= */
  const DOM = {
    // Header & Global
    html: document.documentElement,
    headerPhotoCount: document.getElementById('headerPhotoCount'),
    soundToggleBtn: document.getElementById('soundToggleBtn'),
    favoritesFilterBtn: document.getElementById('favoritesFilterBtn'),
    favCounterBadge: document.getElementById('favCounterBadge'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    
    // Controls
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    sortSelect: document.getElementById('sortSelect'),
    layoutButtons: document.querySelectorAll('.layout-btn'),
    categoriesContainer: document.getElementById('categoriesContainer'),
    fxButtons: document.querySelectorAll('.fx-btn'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    resultsCount: document.getElementById('resultsCount'),
    activeFilterBadge: document.getElementById('activeFilterBadge'),
    
    // Gallery & Empty
    galleryGrid: document.getElementById('galleryGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),
    
    // Lightbox Elements
    lightboxModal: document.getElementById('lightboxModal'),
    slideshowProgressBar: document.getElementById('slideshowProgressBar'),
    lbCounter: document.getElementById('lbCounter'),
    lbTitle: document.getElementById('lbTitle'),
    lbPhotographer: document.getElementById('lbPhotographer'),
    lbSlideshowBtn: document.getElementById('lbSlideshowBtn'),
    lbZoomInBtn: document.getElementById('lbZoomInBtn'),
    lbZoomOutBtn: document.getElementById('lbZoomOutBtn'),
    lbResetZoomBtn: document.getElementById('lbResetZoomBtn'),
    lbFullscreenBtn: document.getElementById('lbFullscreenBtn'),
    lbInfoToggleBtn: document.getElementById('lbInfoToggleBtn'),
    lbFavoriteBtn: document.getElementById('lbFavoriteBtn'),
    lbDownloadBtn: document.getElementById('lbDownloadBtn'),
    lbCloseBtn: document.getElementById('lbCloseBtn'),
    
    lbPrevBtn: document.getElementById('lbPrevBtn'),
    lbNextBtn: document.getElementById('lbNextBtn'),
    lbStage: document.getElementById('lbStage'),
    lbImageWrapper: document.getElementById('lbImageWrapper'),
    lbMainImg: document.getElementById('lbMainImg'),
    
    // Info Drawer
    lbInfoDrawer: document.getElementById('lbInfoDrawer'),
    lbCloseDrawerBtn: document.getElementById('lbCloseDrawerBtn'),
    drawerTitle: document.getElementById('drawerTitle'),
    drawerDesc: document.getElementById('drawerDesc'),
    drawerAuthor: document.getElementById('drawerAuthor'),
    drawerAuthorLink: document.getElementById('drawerAuthorLink'),
    exifCamera: document.getElementById('exifCamera'),
    exifLens: document.getElementById('exifLens'),
    exifAperture: document.getElementById('exifAperture'),
    exifShutter: document.getElementById('exifShutter'),
    exifIso: document.getElementById('exifIso'),
    exifResolution: document.getElementById('exifResolution'),
    drawerLocation: document.getElementById('drawerLocation'),
    drawerTags: document.getElementById('drawerTags'),
    
    // Thumbnail Ribbon
    thumbnailRibbon: document.getElementById('thumbnailRibbon'),
    
    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  /* =========================================================
     4. SOUND SYNTHESIZER (Tactile Web Audio API Feedback)
     ========================================================= */
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
  }

  function playSound(type = 'click') {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'pop') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'swoosh') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.06);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'favorite') {
        // Double chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.06); // A5
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.16);
      }
    } catch (e) {
      // Audio autoplay gracefully suppressed
    }
  }

  /* =========================================================
     5. TOAST NOTIFICATION SYSTEM
     ========================================================= */
  function showToast(message, icon = 'fa-circle-check') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon} toast-icon"></i><span>${message}</span>`;
    DOM.toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  /* =========================================================
     6. CATEGORIES & RENDERING
     ========================================================= */
  function buildCategories() {
    const categoryCounts = { all: GALLERY_DATA.length };
    GALLERY_DATA.forEach(item => {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
    });

    const categories = ['all', ...Object.keys(categoryCounts).filter(c => c !== 'all')];

    DOM.categoriesContainer.innerHTML = categories.map(cat => {
      const displayName = cat === 'all' ? 'All Visuals' : cat;
      const count = categoryCounts[cat] || 0;
      const isActive = state.activeCategory === cat;
      return `
        <button 
          class="category-chip ${isActive ? 'active' : ''}" 
          data-category="${cat}" 
          role="tab"
          aria-selected="${isActive}"
        >
          <span>${displayName}</span>
          <span class="category-count">${count}</span>
        </button>
      `;
    }).join('');
  }

  function renderGallery() {
    if (state.filteredItems.length === 0) {
      DOM.galleryGrid.style.display = 'none';
      DOM.emptyState.classList.add('visible');
    } else {
      DOM.galleryGrid.style.display = '';
      DOM.emptyState.classList.remove('visible');
    }

    DOM.resultsCount.innerHTML = `Showing <strong>${state.filteredItems.length}</strong> of ${GALLERY_DATA.length} photographs`;

    // Active filter badge visibility
    const isFiltered = state.activeCategory !== 'all' || state.searchQuery !== '' || state.onlyFavorites || state.activeFx !== 'fx-normal';
    DOM.activeFilterBadge.style.display = isFiltered ? 'inline-flex' : 'none';
    if (isFiltered) {
      let filterText = 'Active Filter: ';
      if (state.onlyFavorites) filterText += 'Favorites • ';
      if (state.activeCategory !== 'all') filterText += `${state.activeCategory} • `;
      if (state.searchQuery) filterText += `"${state.searchQuery}" • `;
      if (state.activeFx !== 'fx-normal') filterText += `${state.activeFx.replace('fx-', '')} • `;
      DOM.activeFilterBadge.querySelector('span').textContent = filterText.replace(/ • $/, '');
    }

    // Render Grid Cards
    DOM.galleryGrid.innerHTML = state.filteredItems.map((item, index) => {
      const isLiked = state.favorites.has(item.id);
      const aspectStyle = state.layoutMode === 'layout-masonry' ? `style="aspect-ratio: 1 / ${item.aspectRatio};"` : '';
      
      return `
        <article 
          class="gallery-item" 
          data-id="${item.id}" 
          data-index="${index}" 
          tabindex="0"
          role="button"
          aria-label="View photograph: ${item.title}"
        >
          <div class="card-image-wrap loading" ${aspectStyle}>
            <img 
              src="${item.thumb}" 
              data-full="${item.src}" 
              alt="${item.title}" 
              class="gallery-img ${state.activeFx}" 
              loading="lazy"
              onload="this.parentElement.classList.remove('loading')"
            >
          </div>

          <!-- Top Overlay Bar -->
          <div class="card-top-bar">
            <span class="category-tag">${item.category.split('&')[0].trim()}</span>
            <div class="card-quick-actions">
              <button 
                class="card-action-btn like-btn ${isLiked ? 'liked' : ''}" 
                data-id="${item.id}" 
                title="${isLiked ? 'Unlike' : 'Like'}"
                aria-label="Favorite photo"
              >
                <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
              </button>
              <button 
                class="card-action-btn quick-zoom-btn" 
                data-index="${index}" 
                title="Expand in Lightbox"
                aria-label="Quick zoom"
              >
                <i class="fa-solid fa-expand"></i>
              </button>
            </div>
          </div>

          <!-- Bottom Metadata Overlay -->
          <div class="card-overlay">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-photographer">
              <img src="${item.photographer.avatar}" alt="${item.photographer.name}" class="photographer-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(item.photographer.name)}&background=6366f1&color=fff'">
              <span>${item.photographer.name}</span>
            </div>
            <div class="card-meta-row">
              <span class="card-location">
                <i class="fa-solid fa-location-dot"></i> ${item.location.split(',')[0]}
              </span>
              <div class="card-stats">
                <span class="stat-item likes-counter">
                  <i class="fa-solid fa-heart" style="color: ${isLiked ? 'var(--like-color)' : 'inherit'};"></i> 
                  <span>${item.likes + (isLiked ? 1 : 0)}</span>
                </span>
                <span class="stat-item">
                  <i class="fa-solid fa-camera"></i> ${item.exif.aperture}
                </span>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    updateFavoriteBadge();
  }

  function updateFavoriteBadge() {
    const count = state.favorites.size;
    DOM.favCounterBadge.textContent = count;
    DOM.favCounterBadge.classList.add('bump');
    setTimeout(() => DOM.favCounterBadge.classList.remove('bump'), 300);

    if (state.onlyFavorites) {
      DOM.favoritesFilterBtn.classList.add('active');
    } else {
      DOM.favoritesFilterBtn.classList.remove('active');
    }
  }

  /* =========================================================
     7. FILTERING, SEARCH & SORTING
     ========================================================= */
  function applyFilters() {
    let result = [...GALLERY_DATA];

    // 1. Favorites only
    if (state.onlyFavorites) {
      result = result.filter(item => state.favorites.has(item.id));
    }

    // 2. Category filter
    if (state.activeCategory !== 'all') {
      result = result.filter(item => item.category === state.activeCategory);
    }

    // 3. Search query filter
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.photographer.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // 4. Sorting
    switch (state.sortBy) {
      case 'likes':
        result.sort((a, b) => (b.likes + (state.favorites.has(b.id) ? 1 : 0)) - (a.likes + (state.favorites.has(a.id) ? 1 : 0)));
        break;
      case 'title-asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'resolution':
        result.sort((a, b) => b.exif.resolution.localeCompare(a.exif.resolution));
        break;
      case 'featured':
      default:
        // Original curated order
        break;
    }

    state.filteredItems = result;
    renderGallery();
  }

  function resetAllFilters() {
    playSound('pop');
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.sortBy = 'featured';
    state.activeFx = 'fx-normal';
    state.onlyFavorites = false;

    DOM.searchInput.value = '';
    DOM.searchClearBtn.classList.remove('visible');
    DOM.sortSelect.value = 'featured';

    // Reset UI buttons
    document.querySelectorAll('.category-chip').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === 'all');
    });
    DOM.fxButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.fx === 'fx-normal');
    });

    applyFilters();
    showToast('Filters reset to default', 'fa-rotate-left');
  }

  /* =========================================================
     8. LIGHTBOX SYSTEM
     ========================================================= */
  function openLightbox(index) {
    if (state.filteredItems.length === 0) return;
    
    // Bounds checking
    if (index < 0) index = state.filteredItems.length - 1;
    if (index >= state.filteredItems.length) index = 0;

    state.currentIndex = index;
    state.isLightboxOpen = true;
    resetZoom();

    DOM.lightboxModal.classList.add('open');
    DOM.lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    renderThumbnailRibbon();
    updateLightboxContent();
    playSound('swoosh');

    DOM.lightboxModal.focus();
  }

  function closeLightbox() {
    if (!state.isLightboxOpen) return;
    stopSlideshow();
    state.isLightboxOpen = false;
    DOM.lightboxModal.classList.remove('open');
    DOM.lightboxModal.setAttribute('aria-hidden', 'true');
    DOM.lbInfoDrawer.classList.remove('open');
    document.body.style.overflow = '';
    resetZoom();
    playSound('click');
  }

  function updateLightboxContent() {
    const item = state.filteredItems[state.currentIndex];
    if (!item) return;

    // Apply fade transition
    DOM.lbMainImg.classList.add('fade-out');

    setTimeout(() => {
      DOM.lbMainImg.src = item.src;
      DOM.lbMainImg.alt = item.title;
      DOM.lbMainImg.className = `lightbox-main-img ${state.activeFx}`;
      DOM.lbMainImg.classList.remove('fade-out');

      // Update counters & labels
      const currentFormatted = String(state.currentIndex + 1).padStart(2, '0');
      const totalFormatted = String(state.filteredItems.length).padStart(2, '0');
      DOM.lbCounter.textContent = `${currentFormatted} / ${totalFormatted}`;
      DOM.lbTitle.textContent = item.title;
      DOM.lbPhotographer.textContent = `By ${item.photographer.name}`;

      // Update Favorite Button State in Lightbox
      const isLiked = state.favorites.has(item.id);
      DOM.lbFavoriteBtn.innerHTML = `<i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart" style="color:${isLiked ? 'var(--like-color)' : 'inherit'};"></i>`;
      DOM.lbFavoriteBtn.title = isLiked ? 'Remove from favorites' : 'Add to favorites';

      // Update Drawer
      populateInfoDrawer(item);

      // Sync active thumbnail in ribbon
      syncActiveThumbnail();
    }, 120);
  }

  function renderThumbnailRibbon() {
    DOM.thumbnailRibbon.innerHTML = state.filteredItems.map((item, idx) => `
      <div 
        class="thumb-item ${idx === state.currentIndex ? 'active' : ''}" 
        data-index="${idx}" 
        role="tab"
        aria-label="Thumbnail ${idx + 1}"
      >
        <img src="${item.thumb}" alt="${item.title}" loading="lazy">
      </div>
    `).join('');
  }

  function syncActiveThumbnail() {
    const thumbs = DOM.thumbnailRibbon.querySelectorAll('.thumb-item');
    thumbs.forEach((t, i) => {
      const isActive = i === state.currentIndex;
      t.classList.toggle('active', isActive);
      if (isActive) {
        t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }

  function nextImage() {
    if (state.filteredItems.length === 0) return;
    playSound('click');
    resetZoom();
    state.currentIndex = (state.currentIndex + 1) % state.filteredItems.length;
    updateLightboxContent();
    if (state.isSlideshowRunning) resetSlideshowTimer();
  }

  function prevImage() {
    if (state.filteredItems.length === 0) return;
    playSound('click');
    resetZoom();
    state.currentIndex = (state.currentIndex - 1 + state.filteredItems.length) % state.filteredItems.length;
    updateLightboxContent();
    if (state.isSlideshowRunning) resetSlideshowTimer();
  }

  function populateInfoDrawer(item) {
    DOM.drawerTitle.textContent = item.title;
    DOM.drawerDesc.textContent = item.description;
    DOM.drawerAuthor.textContent = item.photographer.name;
    DOM.drawerAuthorLink.href = item.photographer.url;
    DOM.exifCamera.textContent = item.exif.camera;
    DOM.exifLens.textContent = item.exif.lens;
    DOM.exifAperture.textContent = item.exif.aperture;
    DOM.exifShutter.textContent = item.exif.shutter;
    DOM.exifIso.textContent = item.exif.iso;
    DOM.exifResolution.textContent = item.exif.resolution;
    DOM.drawerLocation.innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--accent-secondary);"></i> ${item.location}`;

    DOM.drawerTags.innerHTML = item.tags.map(tag => `<span class="info-tag">#${tag}</span>`).join('');
  }

  function toggleInfoDrawer() {
    state.isInfoOpen = !state.isInfoOpen;
    DOM.lbInfoDrawer.classList.toggle('open', state.isInfoOpen);
    DOM.lbInfoToggleBtn.classList.toggle('active', state.isInfoOpen);
    playSound('click');
  }

  /* --- Zoom & Pan Logic --- */
  function applyTransform() {
    if (state.zoomLevel <= 1) {
      state.panOffset = { x: 0, y: 0 };
      DOM.lbStage.classList.remove('zoomed');
    } else {
      DOM.lbStage.classList.add('zoomed');
    }
    DOM.lbImageWrapper.style.transform = `translate(${state.panOffset.x}px, ${state.panOffset.y}px) scale(${state.zoomLevel})`;
  }

  function zoomIn() {
    if (state.zoomLevel < 3.5) {
      state.zoomLevel = Math.min(4, +(state.zoomLevel + 0.5).toFixed(2));
      applyTransform();
      playSound('click');
    }
  }

  function zoomOut() {
    if (state.zoomLevel > 1) {
      state.zoomLevel = Math.max(1, +(state.zoomLevel - 0.5).toFixed(2));
      applyTransform();
      playSound('click');
    }
  }

  function resetZoom() {
    state.zoomLevel = 1;
    state.panOffset = { x: 0, y: 0 };
    applyTransform();
  }

  /* --- Slideshow Engine --- */
  function toggleSlideshow() {
    if (state.isSlideshowRunning) {
      stopSlideshow();
      showToast('Slideshow paused', 'fa-pause');
    } else {
      startSlideshow();
      showToast('Slideshow started', 'fa-play');
    }
    playSound('pop');
  }

  function startSlideshow() {
    state.isSlideshowRunning = true;
    DOM.lbSlideshowBtn.classList.add('active');
    DOM.lbSlideshowBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    resetSlideshowTimer();
  }

  function stopSlideshow() {
    state.isSlideshowRunning = false;
    DOM.lbSlideshowBtn.classList.remove('active');
    DOM.lbSlideshowBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(state.slideshowInterval);
    DOM.slideshowProgressBar.style.width = '0%';
  }

  function resetSlideshowTimer() {
    if (!state.isSlideshowRunning) return;
    clearInterval(state.slideshowInterval);
    DOM.slideshowProgressBar.style.width = '0%';

    let startTime = Date.now();
    state.slideshowInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, (elapsed / state.slideshowDuration) * 100);
      DOM.slideshowProgressBar.style.width = `${progress}%`;

      if (elapsed >= state.slideshowDuration) {
        startTime = Date.now();
        nextImage();
      }
    }, 50);
  }

  /* --- Fullscreen Toggle --- */
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      DOM.lightboxModal.requestFullscreen().catch(() => {});
      DOM.lbFullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
      document.exitFullscreen().catch(() => {});
      DOM.lbFullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
    playSound('click');
  }

  /* --- Download Feature --- */
  async function downloadCurrentImage() {
    const item = state.filteredItems[state.currentIndex];
    if (!item) return;

    showToast(`Downloading "${item.title}"...`, 'fa-cloud-arrow-down');
    playSound('click');

    try {
      const response = await fetch(item.src);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${item.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_lumina.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
      showToast('Download complete!', 'fa-check');
    } catch (err) {
      // Fallback open in new tab
      window.open(item.src, '_blank');
    }
  }

  /* =========================================================
     9. FAVORITES / LIKES SYSTEM
     ========================================================= */
  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast('Removed from favorites', 'fa-heart-crack');
    } else {
      state.favorites.add(id);
      showToast('Added to favorites!', 'fa-heart');
      playSound('favorite');
    }

    localStorage.setItem('lumina_favorites', JSON.stringify([...state.favorites]));
    
    // Refresh card likes
    renderGallery();

    // If in lightbox, update current state
    if (state.isLightboxOpen) {
      const currentItem = state.filteredItems[state.currentIndex];
      if (currentItem) {
        const isLiked = state.favorites.has(currentItem.id);
        DOM.lbFavoriteBtn.innerHTML = `<i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart" style="color:${isLiked ? 'var(--like-color)' : 'inherit'};"></i>`;
      }
    }
  }

  /* =========================================================
     10. THEME & SOUND CONTROLLER
     ========================================================= */
  function applyTheme(theme) {
    state.theme = theme;
    DOM.html.setAttribute('data-theme', theme);
    localStorage.setItem('lumina_theme', theme);
    DOM.themeToggleBtn.innerHTML = theme === 'light' 
      ? '<i class="fa-solid fa-sun" style="color:#f59e0b;"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  }

  function toggleTheme() {
    playSound('pop');
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme} mode`, newTheme === 'light' ? 'fa-sun' : 'fa-moon');
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('lumina_sound', state.soundEnabled);
    DOM.soundToggleBtn.innerHTML = state.soundEnabled 
      ? '<i class="fa-solid fa-volume-high"></i>' 
      : '<i class="fa-solid fa-volume-xmark" style="color:var(--text-muted);"></i>';
    DOM.soundToggleBtn.classList.toggle('active', state.soundEnabled);
    if (state.soundEnabled) playSound('pop');
    showToast(state.soundEnabled ? 'Audio feedback enabled' : 'Audio feedback muted', state.soundEnabled ? 'fa-volume-high' : 'fa-volume-xmark');
  }

  /* =========================================================
     11. EVENT LISTENERS SETUP
     ========================================================= */
  function initEventListeners() {
    // Theme & Audio Toggles
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    DOM.soundToggleBtn.addEventListener('click', toggleSound);

    // Favorites Filter Toggle
    DOM.favoritesFilterBtn.addEventListener('click', () => {
      playSound('click');
      state.onlyFavorites = !state.onlyFavorites;
      applyFilters();
      if (state.onlyFavorites) {
        showToast('Displaying your liked visuals', 'fa-heart');
      }
    });

    // Search Input (Debounced)
    let searchTimeout = null;
    DOM.searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      state.searchQuery = val;
      DOM.searchClearBtn.classList.toggle('visible', val.length > 0);

      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        applyFilters();
      }, 150);
    });

    DOM.searchClearBtn.addEventListener('click', () => {
      playSound('click');
      DOM.searchInput.value = '';
      state.searchQuery = '';
      DOM.searchClearBtn.classList.remove('visible');
      applyFilters();
      DOM.searchInput.focus();
    });

    // Sort Dropdown
    DOM.sortSelect.addEventListener('change', (e) => {
      playSound('click');
      state.sortBy = e.target.value;
      applyFilters();
    });

    // Layout Switchers
    DOM.layoutButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        DOM.layoutButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const newLayout = btn.dataset.layout;
        state.layoutMode = newLayout;
        DOM.galleryGrid.className = `gallery-grid ${newLayout}`;
        renderGallery();
      });
    });

    // Category Tabs Delegation
    DOM.categoriesContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.category-chip');
      if (!chip) return;
      playSound('click');

      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      state.activeCategory = chip.dataset.category;
      applyFilters();
    });

    // FX Filters Ribbon
    DOM.fxButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('pop');
        DOM.fxButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        state.activeFx = btn.dataset.fx;
        
        // Update gallery images live
        document.querySelectorAll('.gallery-img').forEach(img => {
          img.className = `gallery-img ${state.activeFx}`;
        });

        // Update lightbox image if open
        if (state.isLightboxOpen) {
          DOM.lbMainImg.className = `lightbox-main-img ${state.activeFx}`;
        }

        applyFilters();
      });
    });

    // Reset Filters
    DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
    DOM.emptyResetBtn.addEventListener('click', resetAllFilters);

    // Gallery Card Clicks (Event Delegation)
    DOM.galleryGrid.addEventListener('click', (e) => {
      // Favorite Button Click
      const likeBtn = e.target.closest('.like-btn');
      if (likeBtn) {
        e.stopPropagation();
        toggleFavorite(likeBtn.dataset.id);
        return;
      }

      // Quick Zoom / Card Click
      const card = e.target.closest('.gallery-item');
      if (card) {
        const index = parseInt(card.dataset.index, 10);
        openLightbox(index);
      }
    });

    // Lightbox Controls
    DOM.lbCloseBtn.addEventListener('click', closeLightbox);
    DOM.lbPrevBtn.addEventListener('click', prevImage);
    DOM.lbNextBtn.addEventListener('click', nextImage);
    DOM.lbSlideshowBtn.addEventListener('click', toggleSlideshow);
    DOM.lbZoomInBtn.addEventListener('click', zoomIn);
    DOM.lbZoomOutBtn.addEventListener('click', zoomOut);
    DOM.lbResetZoomBtn.addEventListener('click', () => { playSound('click'); resetZoom(); });
    DOM.lbFullscreenBtn.addEventListener('click', toggleFullscreen);
    DOM.lbInfoToggleBtn.addEventListener('click', toggleInfoDrawer);
    DOM.lbCloseDrawerBtn.addEventListener('click', toggleInfoDrawer);
    DOM.lbDownloadBtn.addEventListener('click', downloadCurrentImage);

    DOM.lbFavoriteBtn.addEventListener('click', () => {
      const item = state.filteredItems[state.currentIndex];
      if (item) toggleFavorite(item.id);
    });

    // Thumbnail Ribbon Click
    DOM.thumbnailRibbon.addEventListener('click', (e) => {
      const thumb = e.target.closest('.thumb-item');
      if (!thumb) return;
      playSound('click');
      const idx = parseInt(thumb.dataset.index, 10);
      state.currentIndex = idx;
      resetZoom();
      updateLightboxContent();
      if (state.isSlideshowRunning) resetSlideshowTimer();
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Global Esc
      if (e.key === 'Escape' && state.isLightboxOpen) {
        closeLightbox();
        return;
      }

      // Lightbox Shortcuts
      if (state.isLightboxOpen) {
        switch (e.key) {
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextImage();
            break;
          case ' ':
            e.preventDefault();
            toggleSlideshow();
            break;
          case '+':
          case '=':
            zoomIn();
            break;
          case '-':
          case '_':
            zoomOut();
            break;
          case '0':
            resetZoom();
            break;
          case 'f':
          case 'F':
            toggleFullscreen();
            break;
          case 'i':
          case 'I':
            toggleInfoDrawer();
            break;
          case 'l':
          case 'L': {
            const item = state.filteredItems[state.currentIndex];
            if (item) toggleFavorite(item.id);
            break;
          }
        }
      }
    });

    // Mouse Drag Pan for Zoomed Lightbox
    DOM.lbStage.addEventListener('pointerdown', (e) => {
      if (state.zoomLevel > 1) {
        state.isDragging = true;
        state.dragStart = { x: e.clientX - state.panOffset.x, y: e.clientY - state.panOffset.y };
        DOM.lbStage.classList.add('dragging');
      }
    });

    window.addEventListener('pointermove', (e) => {
      if (state.isDragging && state.zoomLevel > 1) {
        state.panOffset = {
          x: e.clientX - state.dragStart.x,
          y: e.clientY - state.dragStart.y
        };
        applyTransform();
      }
    });

    window.addEventListener('pointerup', () => {
      if (state.isDragging) {
        state.isDragging = false;
        DOM.lbStage.classList.remove('dragging');
      }
    });

    // Mouse Wheel Zoom
    DOM.lbStage.addEventListener('wheel', (e) => {
      if (!state.isLightboxOpen) return;
      e.preventDefault();
      if (e.deltaY < 0) {
        zoomIn();
      } else {
        zoomOut();
      }
    }, { passive: false });

    // Touch Swipe Gestures for Mobile Lightbox
    DOM.lbStage.addEventListener('touchstart', (e) => {
      state.touchStartX = e.changedTouches[0].screenX;
      state.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    DOM.lbStage.addEventListener('touchend', (e) => {
      state.touchEndX = e.changedTouches[0].screenX;
      state.touchEndY = e.changedTouches[0].screenY;
      handleTouchGesture();
    }, { passive: true });

    function handleTouchGesture() {
      const deltaX = state.touchEndX - state.touchStartX;
      const deltaY = state.touchEndY - state.touchStartY;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Only swipe if not zoomed in and horizontal movement dominates
      if (state.zoomLevel === 1 && absDeltaX > 45 && absDeltaX > absDeltaY) {
        if (deltaX < 0) {
          nextImage();
        } else {
          prevImage();
        }
      }
    }
  }

  /* =========================================================
     12. INITIALIZATION
     ========================================================= */
  function init() {
    applyTheme(state.theme);
    DOM.soundToggleBtn.innerHTML = state.soundEnabled 
      ? '<i class="fa-solid fa-volume-high"></i>' 
      : '<i class="fa-solid fa-volume-xmark" style="color:var(--text-muted);"></i>';

    buildCategories();
    applyFilters();
    initEventListeners();

    console.log('✨ Lumina Visual Gallery initialized with 24 masterpieces.');
  }

  // Launch when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
