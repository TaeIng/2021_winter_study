/*
#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#define MAX 10000 // MAX == 10000���� ġȯ�Ǵ� ���

int main(void)
{// ���� �����

	// fputs, fgets 
	char line[MAX]; // char line[10000]
	FILE * file = fopen("c:\\test1.txt", "wb"); // �ҽ��ڵ忡���� \�� 2�� ��� �ν���
	// r : �б����� w : �������� a : �̾�� // t : �ؽ�Ʈ b : ���̳ʸ�
	if (file == NULL)
	{
		printf("���� ���� ����\n");
		return 1;
	}
	
	fputs("fputs �� �̿��Ͽ� ���� ��\n", file);
	fputs("�ۼ� �Ϸ�\n", file);

	fclose(file); // ������ ���� ���� ���� �ʾ��� �� ���α׷��� ������ ����� ������ �ս��� ���� �� �����Ƿ� fclose�� �ݾ��־����

	return 0;
}
*/