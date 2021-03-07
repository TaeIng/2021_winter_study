/*
#include <stdio.h>
#include <time.h>
// ���� �����ϱ� ���� ���׿� ���� �ּ���!

int level;
int arrayFish[6];
int* cursor;
void initData();
void printfFishes();
void decreaseWater(long elapsedTime);
int checkFishAlive();

int main(void)
{
	long startTime = 0; // ���� ���۽ð�
	long totalElapsedTime = 0; // �� ��� �ð�
	long prevElapsedTime = 0; // ���� ��� �ð� (�ֱٿ� ���� �� �ð� ����)

	int num; // ��� ���׿� ���� �� ������, ����� �Է�
	initData();

	cursor = arrayFish; // cursor[0], cursor[1]... ���� �迭�� ��밡��

	startTime = clock(); // ���� �ð��� 1/1000�ʷ� ��ȯ
	while (1)
	{
		printfFishes();
		//getchar(); // �ӽ÷� ����� ���� ���
		printf("�� �� ���׿� ���� �ֽÁپ��?");
		scanf_s("%d", &num);

		// �Է°� üũ
		if (num < 1 || num >6)
		{
			printf("\n�Է°��� �߸��Ǿ����ϴ�.\n");
			continue;
		}

		totalElapsedTime = (clock() - startTime) / CLOCKS_PER_SEC; // 6000mm�ʸ� 6�ʷ� ��ȯ
		printf("�� ����ð� : %ld �� \n", totalElapsedTime); //long�̹Ƿ� ld

		// ����  �� �� �ð�(���������� �� �� �ð�) ���ķ� �帥 �ð�
		prevElapsedTime = totalElapsedTime - prevElapsedTime;
		printf("�ֱ� ��� �ð� : %ld ��\n", prevElapsedTime);

		// ������ ���� ���� (����)
		decreaseWater(prevElapsedTime);

		// ����ڰ� �Է��� ���׿� ���� �ش�
		// 1. ������ ���� 0 �̸� ���� ���� �ʴ´�.
		if (cursor[num - 1] <= 0)
		{
			printf("%d �� ������ �̹� �׾����ϴ�.. ���� ���� �ʽ��ϴ�.\n", num);
		}
		// 2. ������ ���� 0�� �ƴ� ���? ���� �ش�! 100�� ���� �ʴ��� üũ
		else if (cursor[num - 1] + 1 <= 100)
		{
			//���� �ش�
			printf("%d �� ���׿� ���� �ݴϴ�.\n\n", num);
			cursor[num - 1] += 1;
		}

		// �������� �� ���� Ȯ�� (�������� 20�ʸ��� �� ���� ����)
		if (totalElapsedTime / 20 > level - 1)
		{
			level ++;
			printf("*** �� ������! ���� %d �������� %d ������ ���׷��̵� ***\n\n", level - 1, level);
			
			if (level == 5)
			{
				printf("\n\n�����մϴ�, �ְ� ������ �޼��Ͽ����ϴ�. ������ �����մϴ�!");
				exit(0); // ���α׷� ����
			}
		}

		// ��� ����Ⱑ �׾����� Ȯ��
		if (checkFishAlive() == 0)
		{
			printf("��� ����Ⱑ �׾����ϴ�...\n");
			exit(0);
		}
		else {
			printf("����Ⱑ ���� ��� �־��!\n");
		}
		prevElapsedTime = totalElapsedTime;
		// 10��-> 15�� (5�� : prevElapsedTime -> 15��) -> 25��(10��..?)
	}


	return 0;
}

void initData()
{
	level = 1; //���ӷ���
	for (int i = 0; i < 6; i++)
	{
		arrayFish[i] = 100; // ������ �� ����
	}
}

void printfFishes() // ����� ����ǥ��
{
	printf("%3d�� %3d�� %3d�� %3d�� %3d�� %3d��\n", 1, 2, 3, 4, 5, 6);
	for (int i = 0; i < 6; i++)
	{
		printf(" %4d ", arrayFish[i]);
	}
	printf("\n\n");
}

void decreaseWater(long elapsedTime)
{
	for (int i = 0; i < 6; i++)
	{
		arrayFish[i] -= (level * 1 * (int)elapsedTime); // 1 ���̵� ����
		if (arrayFish[i] < 0)
		{
			arrayFish[i] = 0;
		}
	}
}

int checkFishAlive()
{
	for (int i = 0; i < 6; i++)
	{
		if (arrayFish[i] > 0)
			return 1; // �� True
	}
	return 0;
}
*/