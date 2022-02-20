const sidebars = {
	    docs: [
		          'intro',
		          {
				          type: "category",
				          label: "Cadre avant",
				          link: {
						            title: "Cadre avant",
						            type: 'generated-index',
						            description: "Il s'agit de fabriquer l'avant du trike Mosquito",
						            image: '/img/docusaurus.png'
						          },
				          items: [{
						              type: "doc",
						              label: "Découper le cadre vtt",
						              id: "decoupe-cadre-vtt"
						            },
						            {
								                type: "doc",
								                label: "Fabriquer pattes de cadre",
								                id: "pates-cadre-vtt"
								              },
						            {
								                  type: "doc",
								                label: "fixations du cadre sur pates",
								                id: "fixations-pattes"
								              }
						          ]
				        },
		          {
				          type: "category",
				          label: "Cadre dos",
				          link: {
						            title: "Cadre dos",
						            type: 'generated-index',
						            description: "La fabrication du reste du cadre entre les 4 barres et l'avant du trike.",
						            image: '/img/docusaurus.png'
						          },
				          items: [{
						              type: "doc",
						              label: "siège",
						              id: "siege"
						            },
						            {
								                type: "doc",
								                label: "cadre arrière",
								                id: "cadre-sandwich-cp"
								              }
						          ]
				        },
		          {
				          type: "category",
				          label: "Direction 4 barres",
				          link: {
						            title: "Direction 4 barres",
						            type: 'generated-index',
						            description: "Fabrication de la direction '4 barres' permettant la rotation du trike.",
						            image: '/img/docusaurus.png'
						          },
				          items: [{
						              type: "doc",
						              label: "essieu arrière",
						              id: "essieu-arrière"
						            },
						            {
								                type: "doc",
								                label: "deux bielles de direction",
								                id: "bielles-direction"
								              },

						          ]},
		            {
				              type: "category",
				              label: "Guidon",
				              link: {
						                  title: "Guidon",
						                  type: 'generated-index',
						                  description: "Comment piloter un vélomobile sans guidon ?",
						                  image: '/img/docusaurus.png'
						                },
				              items: [{
						                    type: "doc",
						                    label: "recyclage du jeu de direction",
						                    id: "jeu-direction-vtt"
						                  },
						                  {
									                type: "doc",
									                label: "recyclage du guidon du vtt",
									                id: "guidon-vtt"
									              }
						                ]
				            },
		            {
				              type: "category",
				              label: "Direction",
				              link: {
						                  title: "Direction",
						                  type: 'generated-index',
						                  description: "Fabrcation du jeu de direction permettant de piloter les 4 barres depuis le guidon.",
						                  image: '/img/docusaurus.png'
						                },
				              items: [{
						                    type: "doc",
						                    label: "2 guignols",
						                    id: "guignols"
						                  },
						                  {
									                type: "doc",
									                label: "secteur de bielles",
									                id: "secteur-bielles"
									              },
						                  {
									                type: "doc",
									                label: "fabrication de 6 biellettes",
									                id: "biellettes"
									              }
						                ]
				            },
		            {
				              type: "category",
				              label: "Mécanique vélo",
				              link: {
						                  title: "Mécanique vélo",
						                  type: 'generated-index',
						                  description: "Où l'on parle de ce qui est autour de la mécanique vélo.",
						                  image: '/img/docusaurus.png'
						                },
				              items: [{
						                    type: "doc",
						                    label: "rayonner les roues",
						                    id: "mecanique-velo"
						                  },
						                  {
									                  type: "doc",
									                label: "pose cables",
									                id: "pose-cables"
									              }
						                ]
				            },
		            {
				              type: "category",
				              label: "Carénage",
				              link: {
						                  title: "Carénage",
						                  type: 'generated-index',
						                  description: "Comment fabriquer le carénage du vélomobile.",
						                  image: '/img/docusaurus.png'
						                },
				              items: [{
						                    type: "doc",
						                    label: "découpe des flans",
						                    id: "decoupage-flans"
						                  },
						                  {
									                  type: "doc",
									                label: "assemblages des flans",
									                id: "assamblages-flans"
									              },
						                  {
									                  type: "doc",
									                label: "porte pour rentrer dedans",
									                id: "porte"
									              },
						                  {
									                  type: "doc",
									                label: "découpe du carrenage (retro, phares, déco, ....)",
									                id: "decoupe-carrenage"
									              }
						                ]
				            },
		            {
				              type: "category",
				              label: "Résine",
				              link: {
						                  title: "Résine",
						                  type: 'generated-index',
						                  description: "Fiches complémentaire sur les techniques autour de la résine et la stratification.",
						                  image: '/img/docusaurus.png'
						                },
				              items: [{
						                    type: "doc",
						                    label: "Etuve",
						                    id: "étuve"
						                  },
						                  {
									                  type: "doc",
									                label: "méthode résines",
									                id: "résines"
									              }
						                ]
				            },
		            {
				              type: "category",
				              label: "Montage final",
				              link: {
						                  title: "Montage final",
						                  type: 'generated-index',
						                  description: "Let's learn about the most important Docusaurus concepts!",
						                  image: '/img/docusaurus.png'
						                },
				              items: [{
						                    type: "doc",
						                  label: "ajuster le montant avant",
						                  id: "montage-final"
						                }]
				            }]
	    };

module.exports = sidebars;
