<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class TestApiController extends AbstractController
{
    #[Route('/test-api', name: 'test_api')]
    public function index(Request $request): Response
    {
        $file = $request->files->get("file");
        dump($file);
        return $this->json([
            "status"=>200,
            "message"=> "Document ajouté avec succés"
        ]);
    }
}
