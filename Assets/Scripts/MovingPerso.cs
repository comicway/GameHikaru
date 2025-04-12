using UnityEngine;

public class MovingPerso : MonoBehaviour
{

    void Start()
    {
        
    }

    
    void Update()
    {
        // Obtener la entrada del teclado
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");

        // Crear un vector de movimiento
        Vector3 movement = new Vector3(moveHorizontal, 0.0f, moveVertical);

        // Mover el personaje
        transform.Translate(movement * Time.deltaTime);
        
    }
}
