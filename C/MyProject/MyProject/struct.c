/*
#include <stdio.h>
//����ü
struct GameInfo {
	char* name;
	int year;
	int price;
	char* company;

	struct GameInfo * friendGame; // ���� ��ü ����
}; 

typedef struct{
	char* name;
	int year;
	int price;
	char* company;
	struct GameInfo* friendGame;
} GAME_INFO; // struct ��ü�� GAME_INFO�� ����

int main(void)
{ 
	
	// [���� ���]
	// �̸�: �ﱹ��
	// �߸ų⵵ : 2018��
	// ����: 50��
	// ���ۻ� : ����

	struct GameInfo gameInfo1; // struct GameInfo ������ �ڷ���, gameInfo1 ������
	
	gameInfo1.name = "�ﱹ��";
	gameInfo1.year = 2018;
	gameInfo1.price = 50;
	gameInfo1.company = "����";

	// ����ü ���
	printf("\n -- ���� ��� ���� --\n");
	printf("    ���Ӹ� : %s\n", gameInfo1.name);
	printf("    �߸ų⵵ : %d\n", gameInfo1.year);
	printf("    ���� : %d\n", gameInfo1.price);
	printf("    ���ۻ� : %s\n", gameInfo1.company);

	// ����ü�� �迭ó�� �ʱ�ȭ
	struct GameInfo gameInfo2 = { "�ﱹ��õ��", 1998, 100, "���ư�����" };
	printf("\n -- ���� ��� ���� --\n");
	printf("    ���Ӹ� : %s\n", gameInfo2.name);
	printf("    �߸ų⵵ : %d\n", gameInfo2.year);
	printf("    ���� : %d\n", gameInfo2.price);
	printf("    ���ۻ� : %s\n", gameInfo2.company);

	// ����ü �迭
	struct GameInfo gameArray[2] = {
		{ "�ﱹ��", 2018, 50, "����" },
		{ "�ﱹ��õ��", 1998, 100, "���ư�����" } 
	};

	// ����ü ������
	struct GameInfo* gamePtr; // �̼Ǹ�
	gamePtr = &gameInfo1;
	printf("\n -- �̼Ǹ��� ���� ��� ���� --\n");
	//printf("    ���Ӹ� : %s\n", (*gamePtr).name); // *gamePtr ���θ� �ϸ� gamePtr.name�� ���� �Ǿ����
	//printf("    �߸ų⵵ : %d\n", (*gamePtr).year);
	//printf("    ���� : %d\n", (*gamePtr).price);
	//printf("    ���ۻ� : %s\n", (*gamePtr).company);

	printf("    ���Ӹ� : %s\n", gamePtr->name); // -> �� (*gamePtr)�� ���� �ǹ�
	printf("    �߸ų⵵ : %d\n", gamePtr->year);
	printf("    ���� : %d\n", gamePtr->price);
	printf("    ���ۻ� : %s\n", gamePtr->company);
	
	// ���� ��ü ���� �Ұ�
	gameInfo1.friendGame = &gameInfo2;
	printf("\n -- ���� ��ü ���� ��� ���� --\n");
	printf("    ���Ӹ� : %s\n", gameInfo1.friendGame->name);
	printf("    �߸ų⵵ : %d\n", gameInfo1.friendGame->year);
	printf("    ���� : %d\n", gameInfo1.friendGame->price);
	printf("    ���ۻ� : %s\n", gameInfo1.friendGame->company);

	// typedef
	// �ڷ����� ���� ����
	int i = 1;
	typedef int ����; // int�� ������ ����
	���� �������� = 3; // int i= 3; �� ���� �ǹ�
	printf("�������� : %d", ��������);

	typedef struct GameInfo ��������; // GameInfo�� ���������� ����
	�������� game1;
	game1.name = "�ѱ� ����";

	GAME_INFO game2;
	game2.name = "�ѱ۰���2";
	game2.year = 2014;

	return 0;
}
*/