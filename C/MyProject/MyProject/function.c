/*
#include <stdio.h>
void p(int num); //����
void function_without_return(); 
int fuction_with_return(); // int�� ��ȯ�ϴ� �κ�
void function_without_params();
void fuction_with_params(int num1, int num2, int num3); // 3���� ������ �޴� �Լ�
int apple(int total, int ate); // total ������ ate���� �԰� ���� ���� ��ȯ

int main(void)
{
	function_without_return();
	
	int ret = fuction_with_return();
	p(ret);

	function_without_params();

	fuction_with_params(5, 2, 1);

	int re = apple(5, 2); //5���� ��� �߿��� 2���� �Ծ���.
	printf("��� 5�� �߿� 2���� ������ %d���� ���ƿ�\n", re);
	printf("��� %d�� �߿� %d���� ������ %d���� ���ƿ� \n", 10, 4, apple(10, 4));

	return 0;
}

void p(int num)
{
	printf("num�� %d �Դϴ�\n", num);
}

void function_without_return()
{
	printf("��ȯ���� ���� �Լ��Դϴ�.\n");
}

int fuction_with_return()
{
	printf("��ȯ���� �ִ� �Լ��Դϴ�.\n");
	return 10; // printf ���� ���� �� 10�� ��������
}

void function_without_params() //�Ķ����(���ް�)�� ���� �Լ�
{
	printf("���ް��� ���� �Լ� �Դϴ�.\n");
}

void fuction_with_params(int num1, int num2, int num3)
{
	printf("���ް��� �ִ� �Լ��̸� ���ް��� %d, %d, %d �Դϴ�.\n",
		num1, num2, num3);
}

int apple(int total, int ate)
{
	printf("���ް��� ��ȯ���� �ִ� �Լ��Դϴ�.\n");
	return total - ate;
}
*/