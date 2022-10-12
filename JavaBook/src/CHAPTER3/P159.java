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
		if(answernumber != null) System.out.print("수를 결정하였습니다. 맞추어 보세요\n0-99\n");
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
			System.out.print("맞았습니다.\n다시하시겠습니까(y/n)>>");
			continuegame = sc.next();
			
			if(continuegame.equals("y"))
			{
				cnt = 1;
				InputAnswerNumber();
			}
			else if(continuegame.equals("n"))
			{
				System.out.print("게임을 종료합니다.");
				System.exit(0);			
			}
		}
		else if(answernumber > number)
		{
			System.out.print("더 높게\n");
			InputNumber();
		}
		else if(answernumber < number)
		{
			System.out.print("더 낮게\n");
			InputNumber();
		}
	}
}