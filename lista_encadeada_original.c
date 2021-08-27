#include<stdio.h>
#include<stdlib.h>

struct no {
	int info;
	struct no *prox;
};
typedef struct no *noptr;

void imprime (noptr inicio) {
	noptr p;
	printf("\nLista: ");
	for (p = inicio->prox; p != NULL; p = p->prox)
		printf ("%d, ", p->info);
	printf("\n");
}

noptr busca (int x, noptr inicio) {
	noptr p;
	p = inicio->prox;
	while (p != NULL && p->info != x) {
		p = p->prox;
	}
	return p;
}

void insere (int x, noptr inicio) {
	noptr q;
	if (inicio == NULL) {
		printf("insersao nula\n");
		exit(1);
	}
	q = malloc (sizeof (struct no));
	q->info = x;
	q->prox = inicio->prox;
	inicio->prox = q;
}

void insere_nao_repetido (int x, noptr inicio) {
	noptr q;
	if (inicio == NULL) {
		printf("insersao nula\n");
		exit(1);
	}
	if (busca(x,inicio) != NULL) {
		printf("O elemento %d ja esta inserido na lista!", x);
	} else {
		q = malloc (sizeof (struct no));
		q->info = x;
		q->prox = inicio->prox;
		inicio->prox = q;
	}
}

void remover (noptr inicio) {
	noptr q;
	if ((inicio == NULL) || (inicio->prox == NULL)) {
		printf("remocao nula\n");
		exit(1);
	}
	q = inicio->prox;
	inicio->prox = q->prox;
	free(q);
}

main() {
	//cabe�a da lista
	noptr inicio;
	inicio = malloc (sizeof (struct no));
	inicio->prox = NULL;
	
	int opcao=-1, x=0;
	
	do {
		printf("\n0 - Sair");
		printf("\n1 - Imprimir");
		printf("\n2 - Buscar");
		printf("\n3 - Inserir");
		printf("\n4 - Remover");
		printf("\n5 - Inserir nao repetido");
		printf("\nOpcao: ");
		scanf("%d", &opcao);
		
		switch(opcao) {
			case 0: break;
			case 1: {
				imprime(inicio);
				break;
			}
			case 2: {
				printf("\nDigite o numero: ");
				scanf("%d",&x);
				if (busca(x, inicio) != NULL) {
					printf("\nO elemento %d existe na lista!",x);
				} else {
					printf("\nO elemento %d nao existe na lista!",x);
				}
				break;
			}
			case 3: {
				printf("\nDigite o numero para inserir na lista: ");
				scanf("%d",&x);
				insere(x, inicio);
				break;
			}
			case 4: {
				remover(inicio);
				break;
			}
			case 5: {
				printf("\nDigite o numero para inserir na lista: ");
				scanf("%d",&x);
				insere_nao_repetido(x, inicio);
				break;
			}
			default: printf("\nOpcao invalida!");
		}
	} while(opcao != 0);
}
