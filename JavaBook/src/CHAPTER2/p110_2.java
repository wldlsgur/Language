package CHAPTER2;
import java.util.Scanner;

public class p110_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		CheckSame cs = new CheckSame();
		
	}
}
class CheckSame
{
	private Scanner sc = new Scanner(System.in);
	private int number;
	private int first;
	private int second;
	
	public CheckSame()
	{
		InputNumber();
		Check();
	}
	
	private void InputNumber()
	{
		while(true)
		{	
			System.out.print("2�ڸ��� ���� �Է�(10~99)>>");
			number = sc.nextInt();
			if((number >= 10 && number <= 90) == false)
			{
				System.out.println("10~90�� ������ �ٽ� �Է����ּ���!");
			}
			else if((number >= 10 && number <= 90) == true)
			{
				break;
			}
		}
	}
	private void Check()
	{
		first = number / 10;
		second = number % 10;
		
		if(first == second)
		{
			System.out.print("Yes! 10�� �ڸ��� 1�� �ڸ��� �����ϴ�.");
		}
		else
		{
			System.out.print("No! 10�� �ڸ��� 1�� �ڸ��� �����ʽ��ϴ�.");
		}
	}
}
