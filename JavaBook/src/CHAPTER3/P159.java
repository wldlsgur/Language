package CHAPTER3;
import java.util.Scanner;
import java.util.Random;
public class P159 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Game game = new Game();
		game.InputAnswerNumber();
	}
}
class Game
{
	private Random random = new Random();
	private Scanner sc = new Scanner(System.in);
	
	private Integer answernumber;
	private int number;
	private int cnt = 1;
	private String continuegame;
	
	public Game()
	{
		
	}
	
	public void InputAnswerNumber()
	{
		answernumber = random.nextInt(100);//0~99
		System.out.println(answernumber);
		if(answernumber != null) System.out.print("���� �����Ͽ����ϴ�. ���߾� ������\n0-99\n");
		InputNumber();
	}
	private void InputNumber()
	{
		System.out.print(cnt+">>");
		number = sc.nextInt();
		cnt++;
		CheckNumber();
	}
	private void CheckNumber()
	{
		if(answernumber == number)
		{
			System.out.print("�¾ҽ��ϴ�.\n�ٽ��Ͻðڽ��ϱ�(y/n)>>");
			continuegame = sc.next();
			
			if(continuegame.equals("y"))
			{
				cnt = 1;
				InputAnswerNumber();
			}
			else if(continuegame.equals("n"))
			{
				System.out.print("������ �����մϴ�.");
				System.exit(0);			
			}
		}
		else if(answernumber > number)
		{
			System.out.print("�� ����\n");
			InputNumber();
		}
		else if(answernumber < number)
		{
			System.out.print("�� ����\n");
			InputNumber();
		}
	}
}