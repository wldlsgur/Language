package CHAPTER2;
import java.util.Scanner;
import java.util.Arrays;

public class p110_5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TriangleCheck tc = new TriangleCheck();
	}
}
class TriangleCheck
{
	private Scanner sc = new Scanner(System.in);
	private int[] number = new int[3];
	private boolean check = false;
	public TriangleCheck()
	{
		System.out.print("���� 3�� �Է�>>");
		InputNumber();
		SortNumber();
		Check();
		Print();
	}
	
	private void InputNumber()
	{
		for(int i=0 ; i<number.length ; i++)
		{
			number[i] = sc.nextInt();
		}
	}
	private void SortNumber()
	{
		Arrays.sort(number);
	}
	private void Check()
	{
		if(number[2] < number[0] + number[1])
		{
			check = true;
		}
	}
	private void Print()
	{
		if(check == true)
		{
			System.out.print("�ﰢ���� �˴ϴ�");
		}
		else
		{
			System.out.print("�ﰢ���� �ȵ˴ϴ�");
		}
	}
}
